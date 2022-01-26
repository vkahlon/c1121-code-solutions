const express = require('express');
// const fs = require('fs');
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
  // const getObject = data.notes;
  const readID = req.params.id;
  if (readID < 0) {
    const invalidInput = { error: 'Invaid Number, must be above 0' };
    res.sendStatus(404).json(invalidInput);
  } // else if statement, if the condition is undefined, then respond with 404
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
