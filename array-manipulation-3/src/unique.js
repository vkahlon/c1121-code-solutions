/* exported unique */
// declare a function that takes a list as a parameter
// assign storage space for an empty list
// declare an iteration, the of type, assign it to the variable CaptKey
// if the storage space list doesn't include a value from CaptKey, push it to the list
// after the iteration, return the storage space list
function unique(array) {
  var uniqueList = [];
  for (var Captkey of array) {
    if (!(uniqueList.includes(Captkey))) {
      uniqueList.push(Captkey);
    }
  } return uniqueList;
}
