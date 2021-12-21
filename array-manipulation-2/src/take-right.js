/* exported takeRight */
function takeRight(array, count) {
  var newArray = array;
  var selection = count;
  for (var i = 0; i < selection; i++) {
    newArray[i] = (array[count]);
  }
  return newArray;
}
