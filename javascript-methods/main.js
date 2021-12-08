var num1 = 7;
var num2 = 2;
var num3 = 5;

console.log('The Max number: ' + Math.max(num1, num2, num3));

var heroes = ['spiderpig', 'Homer', 'Austin Powers', 'captain underpants'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index: ' + randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero: ' + randomHero);

var library = [
  {
    title: 'Dallas Cowboys: Legacy of Failure',
    author: 'Shannon Sharpe'
  },
  {
    title: 'Lebron is the Phony Goat',
    author: 'Skip Bayless'
  },
  {
    title: 'The Legend of Vick',
    author: 'Vick Kahlon'
  }
];
var lastBook = library.pop();
console.log((lastBook));

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(3);
console.log('library:' + library);

var fullName = 'Vickram Kahlon';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ' + sayMyName);
