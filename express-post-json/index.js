let nextID = 1;
let grades = {};
const gradesList = [];
const express = require('express');
const app = express();
app.get('/api/grades', (req, res) => {
  res.json(gradesList);
});
const newGrade = express.json();
app.use(newGrade);
app.post('/api/grades', (req, res) => {
  req.body.ID = nextID;
  nextID++;
  res.json(req.body);
  grades = req.body;
  gradesList.push(grades);
  res.send().status(201);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
