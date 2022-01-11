/* exported flatten */
// declare a process with a list as a parameter
// Utilize the concat method of an empty array, which takes a single argument, the spread operator with the input array, assign the result of the expression to the variable flatArray.
// return the flattenArray storage space
function flatten(array) {
  var flattenedArray = [].concat(...array);
  return flattenedArray;
}
