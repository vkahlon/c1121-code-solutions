const fs = require('fs');
let randomNumber = Math.floor(Math.random() * 10);
randomNumber = String(randomNumber);
fs.writeFile('random.txt', randomNumber, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
