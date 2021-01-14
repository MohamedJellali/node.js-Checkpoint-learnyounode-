var fs = require("fs");
var path = require("path"); // path is a node module that get the path from the filenames

var DirFold = process.argv[2];
var extension = "." + process.argv[3];

// function extension(e) {
//   return + e.split(".").pop();
// }
// console.log(process.argv)

fs.readdir(DirFold, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      // path.extname('input.txt')=".txt"
      console.log(file);
    }
  });
});
