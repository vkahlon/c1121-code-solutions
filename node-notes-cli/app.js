const fs = require('fs');
const data = require('./data.json');
const userinput = process.argv[2];
const userInputTwo = process.argv[3];
const userInputThree = process.argv[4];

if (userinput === 'read') {
  fs.readFile('data.json', 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
    for (let i = 1; i < data.nextId; i++) {
      console.log(`${i}: ${data.notes[i]}`);
    }
  });
}
if (userinput === 'create') {
  let dataForCreation = data;
  const iD = data.nextId;
  dataForCreation.notes[iD] = userInputTwo;
  dataForCreation.nextId++;
  dataForCreation = JSON.stringify(dataForCreation, null, 2);
  fs.writeFile('data.json', dataForCreation, 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
  });
}
if (userinput === 'update') {
  let dataForUpdate = data;
  dataForUpdate.notes[userInputTwo] = userInputThree;
  dataForUpdate = JSON.stringify(dataForUpdate, null, 2);
  fs.writeFile('data.json', dataForUpdate, 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
  });
}
if (userinput === 'delete') {
  let dataForDelete = data;
  delete dataForDelete.notes[userInputTwo];
  dataForDelete = JSON.stringify(dataForDelete, null, 2);
  fs.writeFile('data.json', dataForDelete, 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
  });
}
