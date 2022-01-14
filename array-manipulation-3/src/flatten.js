/* exported flatten */
// declare a process with a list as a parameter
// declare an empty list and assign it as storage space
// create an iteration, have it run the length of the input list
// check if the index is an array, if so declare another iteration that runs till input array at index's length
// push the values inside the array at index into the list declared at step 2 storage space
// going back to if statement, if it isnt an array, just push the value into the empty list
// after the intial iteration is complete, return the flatArray list storage space.
function flatten(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var index = 0; index < array[i].length; index++) {
        flatArray.push(array[i][index]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
