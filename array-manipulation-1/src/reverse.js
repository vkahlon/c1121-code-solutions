/* exported reverse */
// In this procedure, we will get a list and return the list but in reverse.
// we need storage space for the new backwards List
// We will set up an iteration, and it will run decrementally until the first item of the list
// The iteration will end when the i reaches an -1 value.
// each iteraton, it will push the value of the index into the new list.
// once the iteration is over, it will return the value of the new list.
function reverse(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
