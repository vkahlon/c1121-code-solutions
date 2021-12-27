/* exported lastChars */
// implement a new process with the inputs of its length and the phrase that will be used
// slice the string to the length of it requested, however, make it a negative number for precision reasons, and assign it
// allocate storage space for the cut phrase
// return the cut phrase.
function lastChars(length, string) {
  var newPhrase = string.slice(-length);
  return newPhrase;
}
