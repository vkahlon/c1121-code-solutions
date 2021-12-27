/* exported firstChars */
// Declare a new process which takes the length and the word as inputs.
//  use the substring method start at 0 since it's the first letters, and input the length to where it ends and assign it...
// allocate storage space for the new phrase
// return the new phrase.
function firstChars(length, string) {
  var iceCream = string.substring(0, length);
  return iceCream;
}
