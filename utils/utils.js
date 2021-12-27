const fs = require("fs");

const canWrite = (path, callback) => {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.W_OK, (err) => {
      resolve(!err);
    });
  });
};

module.exports = canWrite;
