/* exported pick */
// Edge case: falsy values exist, includes will not work.
// declare a process that takes in an entity and list
// allocate storage space for an entity
// declare an interation, have it run at the input list length
// check to see if the input entity at input list at index is inside, make sure it isnt undefined due to edge case
// if so, grab the input entity at input list at index, assign it to its property of the entity object
// return the storage space entity
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
