const { eslintReactDev, eslintVueDev } = require("../../common/enum");
const _ = require("lodash");
const fsUtils = require("../../utils/fs");
const utils = require("../../utils/utils");
const eslintVue = require("../../template/eslint-vue");
const eslintReact = require("../../template/eslint-react");
const fs = require('fs')
const log = require("../../utils/log");

module.exports = {
  async addEslintLint(package, resp) {
    const { typeName } = resp;
    const { devDependencies = {} } = package;

    if (typeName === "react") {
      utils.installMissing(eslintReactDev, Object.keys(devDependencies));
      const hasEslintFile = fsUtils.fileExist("./eslint.js");
      await fs.writeFile("./eslint.js", eslintReact, (err, data) => {
        if (!err) {
          log.info("创建 eslint.js 成功");
        }
      });
    } else if (typeName === "vue") {
      utils.installMissing(eslintVueDev, Object.keys(devDependencies));
      const hasEslintFile = fsUtils.fileExist("./eslint.js");
      await fs.writeFile("./eslint.js", eslintVue, (err, data) => {
        if (!err) {
          log.info("创建 eslint.js 成功");
        }
      });
    }
    return package;
  },
};
