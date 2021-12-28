/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var captKey in source) {
    newObject[captKey] = source[captKey];
  }
  return newObject;
}
