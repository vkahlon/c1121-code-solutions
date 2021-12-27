/* exported chunk */
function chunk(array, size) {
  var theArray = [];
  var newArray = array.slice(0, size);
  var newArray2 = array.slice(size);
  theArray[0] = newArray;
  theArray[1] = newArray2;
  return theArray;
}
