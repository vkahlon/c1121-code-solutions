/* exported chunk */
function chunk(array, size) {
  var theArray = [];
  var theRemainingArray = [];
  for (var i = 0; i < size; i++) {
    theArray[i] = array[i];
  }
  for (var index = size; index < array.length; index++) {
    theRemainingArray[index] = array[index];
  }
  return theArray;
}
