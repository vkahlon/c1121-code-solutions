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
  return res.status(200).json(notesList);
});
app.get('/api/notes/:id', (req, res) => {
  const readObject = data.notes;
  const readID = Number(req.params.id);
  if ((readID < 1) || (!(Number.isInteger(readID)))) {
    const invalidInput = { error: 'Invaid Number, id must be a positive interger' };
    return res.status(400).json(invalidInput);
  }
  if (readObject[readID] !== undefined) {
    return res.status(200).json(readObject[readID]);
  } else {
    const emptyInput = { error: `There is no note, with ${readID} as its ID` };
    return res.status(404).json(emptyInput);
  }
});
const enableAppUse = express.json();
app.use(enableAppUse);

app.post('/api/notes', (req, res) => {
  const newObject = req.body;
  if (newObject.content === undefined) {
    const emptyNote = { error: 'There is no note...' };
    return res.status(400).json(emptyNote);
  }
  if (newObject.content !== undefined) {
    let createData = data;
    const grabID = createData.nextId;
    newObject.id = grabID;
    createData.notes[grabID] = newObject;
    createData.nextId++;
    createData = JSON.stringify(createData, null, 2);
    fs.writeFile('data.json', createData, 'utf8', err => {
      if (err) {
        console.error(err);
        const backEndError = { error: 'An unexpected error occured' };
        return res.status(500).json(backEndError);
      }
      return res.status(201).json(newObject);
    });
  }
});
app.delete('/api/notes/:id', (req, res) => {
  const deleteObject = data.notes;
  const deleteID = Number(req.params.id);
  if ((deleteID < 1) || (!(Number.isInteger(deleteID)))) {
    const invalidInput = { error: 'Invaid Number, id must be a positive interger' };
    return res.status(400).json(invalidInput);
  }
  if (deleteObject[deleteID] !== undefined) {
    let deleteData = data;
    delete deleteData.notes[deleteID];
    deleteData = JSON.stringify(deleteData, null, 2);
    fs.writeFile('data.json', deleteData, 'utf8', err => {
      if (err) {
        console.error(err);
        const backEndError = { error: 'An unexpected error occured' };
        return res.status(500).json(backEndError);
      }
      return res.status(201).json();
    });
  } else {
    const emptyInput = { error: `There is no note, with ${deleteID} as its ID` };
    return res.status(404).json(emptyInput);
  }
});
app.put('/api/notes/:id', (req, res) => {
  const editObject = data.notes;
  const editNestedObject = req.body;
  const editID = Number(req.params.id);
  if ((editID < 1) || (!(Number.isInteger(editID)))) {
    const invalidInput = { error: 'Invaid Number, id must be a positive interger' };
    return res.status(400).json(invalidInput);
  }
  if ((editObject[editID] !== undefined) && (editNestedObject.content === undefined)) {
    const invalidContent = { error: `Missing content, ${editID} is a valid ID, try again with but have content message.` };
    return res.status(404).json(invalidContent);
  }
  if ((editObject[editID] === undefined) && (editNestedObject.content !== undefined)) {
    const invalidContent = { error: `ID: ${editID} is not valid, system recognizes content message, try again with a valid ID.` };
    return res.status(404).json(invalidContent);
  }
  if ((editObject[editID] !== undefined) && (editNestedObject.content !== undefined)) {
    editNestedObject.ID = editID;
    let replaceData = data;
    replaceData.notes[editID] = editNestedObject;
    replaceData = JSON.stringify(replaceData, null, 2);
    fs.writeFile('data.json', replaceData, 'utf8', err => {
      if (err) {
        console.error(err);
        const backEndError = { error: 'An unexpected error occured' };
        return res.status(500).json(backEndError);
      }
      return res.status(201).json(editNestedObject);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
