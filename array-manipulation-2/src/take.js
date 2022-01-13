/* exported take */
// decalre a process and take in a list and a number
// make a copy of a list and reduce the size of it by using the digit we inputted earlier.
// return the reduced and copy of the list
function take(array, count) {
  var modArray = array.slice(0, count);
  return modArray;
}
