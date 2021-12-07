function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(seconds);
}
convertMinutesToSeconds(5);

function greet(name) {
  var greeting = 'Hey, ' + name;
  console.log(greeting);
}
greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  console.log(area);
}
getArea(17, 42);

function getFirstName(person) {
  var frenchName = person;
  console.log(frenchName.firstName);
  return frenchName.firstName;
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var hankHill = array;
  return hankHill[3];
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
