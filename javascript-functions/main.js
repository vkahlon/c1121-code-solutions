function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log(convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log(getArea(17, 42));

function getFirstName(person) {
  var frenchName = person;
  return frenchName.firstName;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var hankHill = array;
  return hankHill[3];
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
