/* exported difference */
// declare a process with two parameters, both being lists
// Use the filter method of the first object that calls an inline callback function that takes the firstResult element that's being processed by the array
// do not return any value if the second list is in the first list. (Only returns unique values in the first list, that's also not in the second list)
// Use the filter method of the second object that calls an inline callback function that takes the firstResult element that's being processed by the array
// do not return any value if the first list is in the filtered first list. (Only returns unique values in the second list, that's also not in the first list)
// combine the two filtered lists together and assign it to the storage space the difference.
// return the difference.

function difference(first, second) {
  var firstResult = first.filter(function (firstResult) {
    return !(second.includes(firstResult));
  });
  var secondResult = second.filter(function (firstResult) {
    return !(first.includes(firstResult));
  });
  var theDifference = firstResult.concat(secondResult);
  return theDifference;
}
