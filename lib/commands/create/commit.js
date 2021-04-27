const { validateCommitMsg } = require("../../common/enum");
const _ = require("lodash");
const utils = require("../../utils/utils");

module.exports = {
  async addCommitLint(package) {
    const { devDependencies = {} } = package;

    await utils.installMissing(
      ["husky", "validate-commit-msg"],
      Object.keys(devDependencies)
    );
    _.set(package, ["scripts", "commit-msg"], "validate-commit-msg");
    _.set(package, ["validate-commit-msg"], validateCommitMsg);
    _.set(package, ["husky", "hooks", "commit-msg"], "npm run commit-msg");

    return package;
  },
};
