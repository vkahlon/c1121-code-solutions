const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (previousValue, currentValue) => previousValue + currentValue;
const sumOfNumbers = numbers.reduce(sum);
console.log(`The sum of all numbers is valued at ${sumOfNumbers}`);

const product = (previousValue, currentValue) => previousValue * currentValue;
const theProduct = numbers.reduce(product);
console.log(`The product of all numbers is valued at ${theProduct}`);

const funds = (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    currentValue.amount = previousValue.amount + currentValue.amount;
  } else {
    currentValue.amount = previousValue.amount - currentValue.amount;
  }
  return currentValue;
};
const getTotalFunds = account.reduce(funds);
console.log(`Your total funds is $${getTotalFunds.amount}`);

const composite = (previousValue, currentValue) => Object.assign(previousValue, currentValue);
const getAllTraits = traits.reduce(composite);
console.log(getAllTraits);
