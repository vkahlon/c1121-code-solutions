/* exported getKeys */
/* exported getValue */
// This process returns an array of the object's keys.
// Need storage space for an array
// must utilize a for in loop to reiterate properties of an object
// each key gets pushed into the storage space array.
// once iteration has been completed, the process spits out the new Array with keys.
function getKeys(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(property);
  }
  return newArray;
}
