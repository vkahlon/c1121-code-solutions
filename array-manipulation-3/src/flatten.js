/* exported flatten */
// adding comment here so i can re-commit
// no spread operator, beginners aren't allowed to use it
// declare a process with a list as a parameter
// Utilize the apply method of the concat property of the array list, which takes a two arguments, an empty array literal, and the input list, assign the result of the expression to the variable flatArray.
// return the flattenArray storage space
function flatten(array) {
  var flatArray = array.concat.apply([], array);
  return flatArray;
}
