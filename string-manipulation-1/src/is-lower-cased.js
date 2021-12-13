/* exported isLowerCased */
// In this Procedure, in order to see if the word given is lowerCased, the word will go in
// a condition check, where we must use the lower-case the word in order to
// see if it matches the word ordinarly. In this situation it is to test if the word is all lower-case
// if so the procedure will give back a true value if not, it will spit out a false value.
function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
