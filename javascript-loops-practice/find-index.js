/* exported findIndex */
function findIndex(array, value) {
  var theTruth = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } else if (array[i] !== value) {
      theTruth = -1;
    }
  }
  return theTruth;
}
