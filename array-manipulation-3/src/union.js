/* exported union */
// declare a function with two arrays as two parameters
// declare an empty list storage space
// concat the arrays together and assign it as an variable
// declare an iteration, of the for of type, assign all retrieved values as a variable captKeys
// if the list from step two doesn't include captkeys, push the value in
// at the end of the iteration, return the intersection list
function union(first, second) {
  var unionList = [];

  var combinedList = first.concat(second);
  for (var captKey of combinedList) {
    if (!(unionList.includes(captKey))) {
      unionList.push(captKey);
    }
  }
  return unionList;
}
