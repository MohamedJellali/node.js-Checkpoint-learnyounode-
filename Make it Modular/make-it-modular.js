var filterFn = require("./mymodule");
var dirFold = process.argv[2];
var ext = process.argv[3];

filterFn(dirFold, ext, function (err, list) {
  if (err) return console.log(err);

  list.forEach(function (file) {
    console.log(file);
  });
});
