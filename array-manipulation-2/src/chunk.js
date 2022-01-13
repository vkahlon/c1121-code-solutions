/* exported chunk */
// declare a process which takes in a list and the amount of times it gets split
// declare an empty list and allocate it to storage space
// declare an iteration, have it run the length of the list, increment it by split size
// slice list, starting value of count, and end it by count + split size and assign storage space for a list
// push the in process list storage space into the main list that was declared earlier.
// after the iteration is complete return the main list
function chunk(array, size) {
  var chunkyArray = [];
  for (var i = 0; i < array.length; i += size) {
    var innerArray = array.slice(i, i + size);
    chunkyArray.push(innerArray);
  }
  return chunkyArray;
}
