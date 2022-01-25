let nextID = 1;
const grades = {};
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
  const newObject = req.body;
  newObject.id = nextID;
  grades[nextID] = newObject;
  nextID++;
  res.status(201).json(newObject);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
