const fs = require("fs");
// console.log(process.argv);
var myfile = fs.readFileSync(process.argv[2]); //process.argv[2]: contain the path to our profile
var linesNbr = myfile.toString().split("\n").length - 1;
console.log(linesNbr);
