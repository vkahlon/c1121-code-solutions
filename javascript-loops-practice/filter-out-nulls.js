/* exported filterOutNulls */
function filterOutNulls(values) {
  var cleanArray = [];
  var i = 0;
  for (i; i < values.length; i++) {
    if (values[i] !== null) {
      cleanArray.push(values[i]);
    }
  }
  return cleanArray;
}
