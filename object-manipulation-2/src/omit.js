/* exported omit */
// declare a process with two input values, an entity and an list
// set storage space for a new entity
// declare an iteration, declare storage space that iterates over the entity, and creates a new entity with its values
// if the objects don't contain any of the values from the entity that was previously declared
// assign them that value that wasnt previously listed to the new entity storage space,
function omit(source, keys) {
  var newObject = {};
  for (var captKey in source) {
    if (!(keys.includes(captKey))) {
      newObject[captKey] = source[captKey];
    }
  }
  return newObject;
}
