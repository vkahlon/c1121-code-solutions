/* exported chunk */
function chunk(array, size) {
  var chunkyArray = [];
  var theArray = [];
  if (2 % size === 0) {
    chunkyArray = [array.slice(0, size)];
    for (var i = size; i < array.length; i++) {
      theArray.push(array[i]);
    }
  } return chunkyArray;

}
