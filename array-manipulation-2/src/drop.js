/* exported drop */
// For this process, it will take in a list and a number input
// allocate storage space for a new list
// allocate storage space for the number that was inputted
// create an iteration, begin at input count, have it run to the list length
// Set the new list with the previous inputted lists  at value.
// Once the iteration has been completed, return the new list.
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
