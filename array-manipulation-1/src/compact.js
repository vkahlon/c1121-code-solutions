/* exported compact */
// To omit all falsy values and return them into a new array
// Comparison wont work due to NaN
// Set storage space for the new array that only contains truth values.
// Will perform iterations over the input array to only push truthy values to the storage space array.
// if condition checks if the item is truthy, if so it pushes item to new array.
// once the iteration is completed, return the value of the new compactArray.
 function compact (array) {
   var compactArray = [];
   for  (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
     }
     return compactArray;
   }
