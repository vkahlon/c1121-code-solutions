/* exported dropRight */
// declare a process with inputs of a list and a count
// assign storage space for a list
// decalre an iteration have it run the length of input list subtracted by the input count
// assign the value of the list at an index, to the storage space earlier called.
// return the new list once the iteration is over
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}
