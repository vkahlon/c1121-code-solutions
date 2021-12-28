/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var captKey in source) {
    if (keys.includes(captKey)) {
      newObject[captKey] = source[captKey];
    }
  }
  return newObject;
  // for (var i = 0; i < keys.length; i++) {
  //   newObject = source;
  // }
}
