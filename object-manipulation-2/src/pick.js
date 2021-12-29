/* exported pick */
// Edge case: falsy values exist, includes will not work.
// declare a process that takes in an entity and list
// allocate storage space for an entity
//
function pick(source, keys) {
  var newObject = {};
  for (var captKey in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === captKey) {
        newObject[captKey] = source[captKey];
      }
    }
  }
  return newObject;
}
