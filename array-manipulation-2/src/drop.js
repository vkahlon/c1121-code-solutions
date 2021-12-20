/* exported drop */
function drop(array, count) {
  var newArray = [];

  for (var i = count; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}
