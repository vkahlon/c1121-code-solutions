/* exported invert */
// declare a process with a input entity
// assign storage space for an empty entity
// get access to the entity keys, convert it into a list, and assign it to storage space
// get access to the entity name, convert it into a list, and assign it to storage space
// go through an iteration, it runs through list contents amount, and increment it by one
// get access of the property name at an index and assign it to storage space
// get access of the key value at an index and assign it storage space.
// get access to the storage space entity, call the storage space that contains the single property name, and assign it to the single key value.
// once iteration is over, return the entity storage space
function invert(source) {
  var newObject = {};
  var theLength = Object.keys(source);
  var theProperty = Object.values(source);
  for (var i = 0; i < theLength.length; i++) {
    var newProperty = theProperty[i];
    var newKey = theLength[i];
    newObject[newProperty] = newKey;
  }
  return newObject;
}
