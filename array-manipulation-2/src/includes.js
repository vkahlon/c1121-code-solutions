/* exported includes */
// declare the process, and take in a name and a value
// delcare an iteration, run until list length
// if the list contains the value, return the process as true
// otherwise false.
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
