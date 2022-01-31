const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
const evenNumbers = numbers.filter(evenNumber => evenNumber % 2 === 0);
console.log(`List of Even Numbers: ${evenNumbers}`);

const overFive = numbers.filter(thefive => thefive > 5);
console.log(`List of Numbers over 5: ${overFive}`);

const thoseWithE = names.filter(letterE => (letterE.startsWith('E')));
console.log(`The ones with E: ${thoseWithE}`);

const includesDoubleD = names.filter(doubleD => (doubleD.includes('d')) || (doubleD.includes('D')));
console.log(`The ones with the letter d: ${includesDoubleD}`);
