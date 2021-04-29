const log = require("../../utils/log");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { addCommitLint } = require("./commit");
const { addEslintLint } = require("./eslint");

async function create(options) {
  const resp = await inquirer.prompt([
    {
      type: "list",
      name: "typeName",
      message: "当前项目的运行框架为?",
      choices: ["react", "vue"],
      default: 0,
    },
    {
      type: "confirm",
      name: "commitLint",
      message: "是否需要创建commit校验",
      default: true,
    },
    {
      type: "confirm",
      name: "eslint",
      message: "是否需要创建默认eslint",
      default: true,
    },
  ]);
  const { typeName, commitLint, eslint } = resp;

  // 校验当前环境下是否有package.json
  let _package = require(path.resolve("./package.json"));

  if (!_package) {
    log.error("未找到package.json文件，请先初始化项目");
    return;
  }

  // commit 校验
  if (commitLint) {
    _package = await addCommitLint(_package);
  }

  // 如果有eslint 需要配置的话
  if (eslint) {
    _package = await addEslintLint(_package, resp);
  }

  _package = await require(path.resolve("./package.json"));

  // 重写packjson.json
  await fs.writeFile(
    "./package.json",
    JSON.stringify(_package, null, 2),
    (err, data) => {
      if (!err) {
        log.info("重写 package.json 成功!");
      }
    }
  );
}

module.exports = async (options) => {
  create(options);
};
