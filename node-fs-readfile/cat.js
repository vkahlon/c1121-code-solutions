const fs = require('fs');
function getText(number) {
  const fileCount = process.argv.length;
  fs.readFile(process.argv[number], 'utf8', (err, text) => {
    if (err) throw err;
    console.log(text);
  });
  const i = number + 1;
  if (i < fileCount) {
    getText(i);
  }
}
getText(2);
