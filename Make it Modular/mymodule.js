var fs = require("fs");
var path = require("path");

module.exports = function (dirFold, ext, callback) {
  fs.readdir(dirFold, function (err, list) {
    if (err) return callback(err);

    list = list.filter(function (file) {
      return path.extname(file) === "." + ext;
    });

    callback(null, list);
  });
};
