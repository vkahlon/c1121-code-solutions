/* exported filterOutStrings */
/* exported filterOutNulls */
function filterOutStrings(values) {
  var stringFreeArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      stringFreeArray.push(values[i]);
    }
  }
  return stringFreeArray;
}
