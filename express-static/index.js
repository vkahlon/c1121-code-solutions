const express = require('express');
const path = require('path');
const app = express();
const combinePaths = path.join('./public', __dirname);
console.log(combinePaths);
const testing = express.static('public');
app.use(testing);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
