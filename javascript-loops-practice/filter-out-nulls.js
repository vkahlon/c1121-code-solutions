/* exported filterOutNulls */
function filterOutNulls(values) {
  var cleanArray = [];
  var dirtyArray = [];
  var i = 0;
  for (i; i < values.length; i++) {
    if (values[i] === null) {
      // My bug //
      dirtyArray.push(values[i]);
    } else {
      cleanArray.push(values[i]);
    }
  }
  return cleanArray;
}
