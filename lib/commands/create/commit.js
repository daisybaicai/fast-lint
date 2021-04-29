const { validateCommitMsg } = require("../../common/enum");
const _ = require("lodash");
const utils = require("../../utils/utils");

module.exports = {
  async addCommitLint(_package) {
    const { devDependencies = {} } = _package;

    await utils.installMissing(
      ["husky", "validate-commit-msg"],
      Object.keys(devDependencies)
    );
    _.set(_package, ["scripts", "commit-msg"], "validate-commit-msg");
    _.set(_package, ["validate-commit-msg"], validateCommitMsg);
    _.set(_package, ["husky", "hooks", "commit-msg"], "npm run commit-msg");

    return _package;
  },
};
