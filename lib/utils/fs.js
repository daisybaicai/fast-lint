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
  readFile(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', function (error, data) {
        if (error) return reject(error);
        resolve(data);
      })
    });
  }
};
