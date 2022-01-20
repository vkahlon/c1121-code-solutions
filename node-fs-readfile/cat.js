const fs = require('fs');
for (var i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, text) => {
    if (err) throw err;
    return console.log(text);
  });
}
