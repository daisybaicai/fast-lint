const fs = require("fs");

module.exports = {
  fileExist(path) {
    try {
      fs.accessSync(path, fs.F_OK);
    } catch (e) {
      return false;
    }
    return true;
  },
};
