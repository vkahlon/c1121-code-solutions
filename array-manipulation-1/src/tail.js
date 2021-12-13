/* exported tail */
// In This procedure, we will be omitting the very first index of the array.
// To accomplish this, in order to not modify the original input list.
// We will allocate storage for the new list
// We will go through an iteration, that takes the lists length, and uses it
// to find the 2nd item in the list and so forth till the list ends.
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
