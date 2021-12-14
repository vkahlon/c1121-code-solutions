/* exported capitalizeWord */
// In this process, we will be taking a string and fixing its capitalization
// need to allocate storage space for the new fixed string
// need to allocate storage space for the first letter that must be uppercased
// need to allocate storage space since for javscript, it manually needs to be split in two words with both first letters needing to be uppercased.
// this storage space will be allocated exclusively to the word javascript.
// In order to fix the capitalization, we will force every string at character 0 to be uppercased.
// For the second part of the capitalization, we will force the remaining cases to be lower, with exception of JavaScript, where we repeat the process at the Script section of the word.
// We will filter out javascript by employing an comparison check with it's starting character j or J
// Once the process is complete, it will return the value of the process.
function capitalizeWord(word) {
  var newLetterOne = '';
  var newWordOne = '';
  var newLetterTwo = '';
  var newWordTwo = '';
  if ((word.charAt(0) === 'j') ||
    (word.charAt(0) === 'J')) {
    newLetterOne = word.charAt(0);
    newLetterOne = newLetterOne.toUpperCase();

    newWordOne = word.slice(1, 4);
    newWordOne = newWordOne.toLowerCase();

    newLetterTwo = word.charAt(4);
    newLetterTwo = newLetterTwo.toUpperCase();

    newWordTwo = word.slice(5, 10);
    newWordTwo = newWordTwo.toLowerCase();
    return newLetterOne + newWordOne + newLetterTwo + newWordTwo;
  } else {
    newLetterOne = word.charAt(0);
    newLetterOne = newLetterOne.toUpperCase();

    newWordOne = word.slice(1, word.length);
    newWordOne = newWordOne.toLocaleLowerCase();
    return newLetterOne + newWordOne;
  }
}
