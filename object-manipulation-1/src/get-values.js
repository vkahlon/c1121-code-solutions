// This process returns an array of the object's property value.
// Need storage space for an array
// must utilize a for in loop to reiterate properties of an object
// each property value gets pushed into the storage space array.
// once iteration has been completed, the process spits out the new Array.
function getValues(object) {
  var newArray = [];
  for (var value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
var object1 = { firstName: 'vick' };
getValues(object1);
