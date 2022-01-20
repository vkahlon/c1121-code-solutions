const fs = require('fs');
const randomPhrase = process.argv[2];
fs.writeFile('note.txt', randomPhrase, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
