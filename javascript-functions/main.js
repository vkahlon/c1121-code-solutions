function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('Value of convertMinutesToSeconds: ' + convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log('Value of greet: ' + greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Value of getArea: ' + getArea(17, 42));

function getFirstName(person) {
  var frenchName = person;
  return frenchName.firstName;
}
console.log('Value of getFirstName: ' + getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var hankHill = array;
  return hankHill[3];
}
console.log('Value of getLastElement: ' + getLastElement(['propane', 'and', 'propane', 'accessories']));
