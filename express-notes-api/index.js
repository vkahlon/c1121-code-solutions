const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();

app.get('/api/notes', (req, res) => {
  const notesList = [];
  const getObject = data.notes;
  for (const property in getObject) {
    notesList.push(getObject[property]);
  }
  res.status(200).json(notesList);
});
app.get('/api/notes/:id', (req, res) => {
  const readObject = data.notes;
  const readID = Number(req.params.id);
  if ((readID < 1) || (!(Number.isInteger(readID)))) {
    const invalidInput = { error: 'Invaid Number, id must be above positive or interger' };
    res.status(400).json(invalidInput);
  }
  if (readObject[readID] !== undefined) {
    res.status(200).json(readObject[readID]);
  } else {
    const emptyInput = { error: 'There is no note, with this ID' };
    res.status(404).json(emptyInput);
  }
});
const enableAppUse = express.json();
app.use(enableAppUse);

app.post('/api/notes', (req, res) => {
  const newObject = req.body;
  if (newObject.content === undefined) {
    const emptyNote = { error: 'There is no note...' };
    res.status(400).json(emptyNote);
  }
  let createData = data;
  const grabID = createData.nextId;
  newObject.id = grabID;
  createData.notes[grabID] = newObject;
  createData.nextId++;
  createData = JSON.stringify(createData, null, 2);
  fs.writeFile('data.json', createData, 'utf8', err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.err(err);
      res.status(500);
    }
  });
  res.status(201).json(newObject);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
