/* exported getLastChar */
function getLastChar(string) {
  // the getLastChar Instruction sheet, will take in a word//
  // through the charAt procedure, it will take the value of the word, examine//
  // each letter till the end, recognize the end, and take the last character before//
  // the end and spit out the value of the character.//
  return string.charAt(string.length - 1);
}
