const add = require('./add.js');
const sub = require('./subtract.js');
const prod = require('./multiply.js');
const div = require('./divide.js');

if (process.argv[3] === 'plus') {
  console.log(`${add.addition(process.argv[2], process.argv[4])}`);
}
if (process.argv[3] === 'minus') {
  console.log(`${sub.subtraction(process.argv[2], process.argv[4])}`);
}
if (process.argv[3] === 'times') {
  console.log(`${prod.multiply(process.argv[2], process.argv[4])}`);
}
if (process.argv[3] === 'over') {
  console.log(`${div.divide(process.argv[2], process.argv[4])}`);
}
