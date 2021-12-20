/* exported drop */
// For this process, it will take in a list and a number input
// allocate storage space for a new list
// allocate storage space for the number that was inputted
// create an iteration, begin at zero, have it run to the list length subtracted by the amount of count from earlier input
// Set the new list with the previous inputted lists value, and incrememnt the number.
// Once the iteration has been completed, return the new list.
function drop(array, count) {
  var newArray = [];
  var dedicatedCount = count;
  for (var i = 0; i < array.length - dedicatedCount; i++) {
    newArray[i] = array[count];
    count++;
  }
  return newArray;
}
