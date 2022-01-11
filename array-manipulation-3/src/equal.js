/* exported equal */
// declare a process that takes in two parameters: first & second
// Check to see first and second length are equal, if not, return false
// If true, assign the both lists as a string storage space, and compare it, if not equal, return false, if equal return true
function equal(first, second) {
  if (first.length === second.length) {
    var firstConversion = JSON.stringify(first);
    var secondConversion = JSON.stringify(second);
    if (firstConversion === secondConversion) {
      return true;
    }
  } else {
    return false;
  }
  return false;
}
