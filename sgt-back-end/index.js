const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.use(express.json());

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  let score = Number(req.body.score);
  if ((name === undefined) || (course === undefined) || (score < 0) || (score > 100)) {
    return res.status(400).json({
      error: `Please try again, with valid inputs: your gradeID: ${name}  your course: ${course} your score: ${score}`
    });
  } else {
    score = String(score);
    const text = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
    const values = [name, course, score];

    db.query(text, values)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
