/* exported intersection */
// declare storage space that two parameters as inputs
// Use the filter method of the first object that calls an inline callback function that takes the intersection element that's being processed by the array
// return any values that the second list matches with the first list
// return the intersection storage space.

function intersection(first, second) {
  var intersection = first.filter(function (intersection) {
    return second.includes(intersection);
  });
  return intersection;
}
