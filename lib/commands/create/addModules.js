const { validateCommitMsg } = require("../../common/enum");
const _ = require("lodash");
const utils = require("../../utils/utils");

module.exports = {
  async addModules(_package, attrs, devDeps) {
    await _.set(_package, [attrs], devDeps);
    return _package;
  },
};
