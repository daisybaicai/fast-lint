const prettier = require("prettier");
const _ = require('lodash');
const log = require("./log");
const shell = require("shelljs");

module.exports = {
  prettify(code, parser = "babel") {
    if (code) {
      return prettier.format(code, {
        semi: true,
        singleQuote: true,
        trailingComma: "all",
        printWidth: 120,
        tabWidth: 2,
        parser,
      });
    }
    return "";
  },
  /**
   *
   * @param {*} origin
   * @param {*} depends
   * @param {*} mode D/S
   */
  installMissing(origin = [], depends = [], mode = "D") {
    const diffenceArr = _.difference(
      origin,
      depends
    );
    if (diffenceArr.length > 0) {
      log.info("正在安装相关依赖");

      const installExe = `npm install ${diffenceArr.join(" ")} -${mode}`;
      log.info(installExe)
      // 安装缺的arr
      shell.exec(installExe);
    }
  },
};
