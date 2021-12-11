/* exported isVowel */
// in this procedure, it takes a letter, uppercases it,
// and undergoes a test to see if it matches any of the uppercased letters that are considered vowels.
// if the uppercased letter matches the uppercased vowl, then it returns true
// otherwise it returns false.
function isVowel(char) {
  if ((char.toUpperCase() === 'A') ||
      (char.toUpperCase() === 'I') ||
      (char.toUpperCase() === 'E') ||
      (char.toUpperCase() === 'O') ||
      (char.toUpperCase() === 'U')) {
    return true;
  } else {
    return false;
  }
}
