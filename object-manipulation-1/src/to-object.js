/* exported toObject */
// In this process, it returns a single keyValuePair, one property & one value
// need storage for an empty object
//use bracket notation to input the key, find the property name within the array at index 0
//get access to the value by going to the intial array at index 1, retrieve the value and assign it to the key.
// return the object with its new property and value
function toObject(keyValuePair) {
var newObject = {};
{
  newObject[keyValuePair[0]] = keyValuePair[1];
} return newObject;
}
