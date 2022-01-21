const fs = require('fs');
const excerpt = process.argv[2];

if (excerpt === 'dijkstra.txt') {
  fs.readFile('dijkstra.txt', 'utf8', (err, text) => {
    if (err) throw err;
    return console.log(text);
  });
} else if (excerpt === 'cunningham.txt') {
  fs.readFile('cunningham.txt', 'utf8', (err, text) => {
    if (err) throw err;
    return console.log(text);
  });
} else if (excerpt === 'hopper.txt') {
  fs.readFile('hopper.txt', 'utf8', (err, text) => {
    if (err) throw err;
    return console.log(text);
  });
} else {
  console.log('You messed up, try again!');
}
