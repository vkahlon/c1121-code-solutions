/* exported initial */
// For this procedure, we will be returning all elements in a list except for the last one
// First, a storage space list will need to be allocated in order to not modify the original input.
// An iteration will be utilized, it will run until it reaches the list last item index.
// This is accomplished by taking the array length and subtracting it by one.
// through each iteration, the list item will be copied and placed into the storage space list.
// After the iteration is completed, it will return the storage space list, that we allocated.
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
