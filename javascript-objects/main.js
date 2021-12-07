var studentObject = {
  firstName: 'Vickram',
  lastName: 'Kahlon',
  age: 25
};

var fullName = studentObject.firstName + ' ' + studentObject.lastName;
console.log('value of fullName:', fullName);

studentObject.livesinIrvine = false;
studentObject.previousOccupation = 'Business Analyst';
console.log('value of livesinIrvine:', studentObject.livesinIrvine);
console.log('value of previousOccupation:', studentObject.previousOccupation);
console.log('value of studentObject:', studentObject);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2013
};

vehicle.color = 'white';
vehicle.isConvertible = false;
console.log('value of color:', vehicle.color);
console.log('value of isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Yogi',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
