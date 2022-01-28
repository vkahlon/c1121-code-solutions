const takeAChance = require('./take-a-chance');
const myChance = takeAChance('Hank Hill');

myChance.then(response => {
  console.log(response);
});
myChance.catch(err => {
  console.error(err.message);
});
