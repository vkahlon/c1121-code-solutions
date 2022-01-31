const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubleNumber = numbers.map(x => x * 2);
console.log(`Doubled Number: ${doubleNumber}`);

const numberConversion = numbers.map(conv => '$' + conv.toFixed(2));
console.log(`Converted Number: ${numberConversion}`);

const rageText = languages.map(rage => rage.toUpperCase());
console.log(`RAAAGE TEXT: ${rageText}`);

const theLetter = languages.map(letter => letter[0]);
console.log(`Letter per language: ${theLetter}`);
