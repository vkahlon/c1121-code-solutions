/* exported capitalizeWord */
// In this process, we will be taking a string and fixing its capitalization
// need to allocate storage space for the new fixed string
// In order to fix the capitalization, we will force every string at character 0 to be uppercased.
// For the second part of the capitalization, we will force the remaining cases to be lower, with exception to JavaScript
// We will filter out javascript by employing an comparison check with it's starting character j or J
// Once the process is complete, it will return the value of the process.
function capitalizeWord(word) {
  var newLetterOne = '';
  var newWordTwo = '';
  if ((word.charAt(0) === 'j') ||
    (word.charAt(0) === 'J')) {
    newLetterOne = word.charAt(0);
    newLetterOne = newLetterOne.toUpperCase();
    return newLetterOne;
  }
  return newLetterOne + newWordTwo;
}
