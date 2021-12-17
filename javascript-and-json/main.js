var bookArray = [{
  isbn: '12345 - 12345',
  title: 'Diary of a Madman',
  author: 'Ozzy Osborne'
},
{
  isbn: '54321 - 54321',
  title: 'Blizzard of Oz',
  author: 'Randy Rhodes'
},
{
  isbn: '12345 - 54321',
  title: 'How is Ozzy still alive',
  author: 'Dr. Cliff Hutchinson'
}
];
JSON.stringify(bookArray);
console.log(bookArray);
console.log('typeOf', typeof bookArray);

var jStyle = '[{ "name": "Vick Kahlon", "id": "80154" }]';
JSON.stringify(jStyle);
console.log(jStyle);
console.log('typeOf', typeof jStyle);

var parseSring = JSON.parse(jStyle);
console.log(parseSring);
console.log('typeOf', typeof parseSring);
