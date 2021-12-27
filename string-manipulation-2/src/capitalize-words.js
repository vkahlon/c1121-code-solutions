/* exported capitalizeWords */
// lowercase the string first
// split the string into an array thorugh the split method, with the intent with utilizing the join method later.
// utilize iteration, run until out of words, in the iteration, uppercase each index and restore the rest of the characters through substring method.
// utilize the join method to make the array back into a string
// return the string.
function capitalizeWords(string) {
  var lowerCasedString = string.toLowerCase();
  var newArrayWord = lowerCasedString.split(' ');

  for (var i = 0; i < newArrayWord.length; i++) {
    var newUpperCaseLetter = newArrayWord[i][0].toUpperCase();
    var restOfWord = newArrayWord[i].substring(1);
    var combinedWord = newUpperCaseLetter + restOfWord;
    newArrayWord[i] = combinedWord;
  }
  return newArrayWord.join(' ');
}
