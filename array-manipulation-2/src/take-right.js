/* exported takeRight */
// Define a new process and take in a list and a number
// assign storage space for the shallow copy of the list.
// utilize the slice method to take a sub section of an array.
// return the storage space
function takeRight(array, count) {
  var newArray = array.slice(-count);
  return newArray;
}
