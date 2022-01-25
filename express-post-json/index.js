let nextID = 1;
let grades = {};
const express = require('express');
const app = express();
app.get('/api/grades', (req, res) => {
  const gradesList = [];
  for (const property in grades) {
    gradesList.push(grades[property]);
  }
  res.json(gradesList);
});
const newGrade = express.json();
app.use(newGrade);
app.post('/api/grades', (req, res) => {
  req.body.ID = nextID;
  nextID++;
  res.json(req.body);
  grades = req.body;
  res.send().status(201);
});
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 8080');
});
