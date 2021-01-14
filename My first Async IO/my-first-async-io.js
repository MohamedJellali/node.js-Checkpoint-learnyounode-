var fs = require("fs");

fs.readFile(process.argv[2], function (error, myfile) {
  var linesNbr = myfile.toString().split("\n").length - 1;
  console.log(linesNbr);
});
