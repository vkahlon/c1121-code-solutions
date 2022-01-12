/* exported zip */
// declare a function that takes in first and second as its parameters
// assign an empty list as storage space, name it nest.
// Find out which list has less items through min method of the math object, assign that list's length as storage space
// declare an iteration, have it run till the storage space declared in the last step, increment it by one
// declare a new list, that contains first at index, second at index and assign it to storage space
// push that storage space to the storage space list that was declare in step 2
// after the loop concludes, return the list
function zip(first, second) {
  var nestList = [];
  var smallerList = Math.min(first.length, second.length);
  for (var i = 0; i < smallerList; i++) {
    var newNest = [first[i], second[i]];
    nestList.push(newNest);
  }
  return nestList;
}
