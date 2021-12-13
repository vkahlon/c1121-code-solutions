/* exported isUpperCased */
// In this Procedure, in order to see if the word given is uppercased, it must undergo
// a condition check, where we must use the upperCase process of that word, in order to
// see if it matches the word ordinarly. In this situation it is to test if the word is all caps
// if so the procedure will give back a true value if not, it will spit out a false value.
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
