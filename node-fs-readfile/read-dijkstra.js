const fs = require('fs');
fs.readFile('dijkstra.txt', 'utf8', (err, text) => {
  if (err) throw err;
  return console.log(text);
});
