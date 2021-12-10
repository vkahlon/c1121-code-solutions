/* exported includesSeven */
function includesSeven(array) {
  var doesIncSeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return doesIncSeven;
}
