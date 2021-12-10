/* exported filterOutStrings */
/* exported filterOutNulls */
function filterOutStrings(values) {
  var stringFreeArray = [];
  var stringArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'string') {
      stringArray.push(values[i]);
    } else {
      stringFreeArray.push(values[i]);
    }
  }
  return stringFreeArray;
}
