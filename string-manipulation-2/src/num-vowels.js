/* exported numVowels */
// declare the process, incoporate the input value
// intialize storage space for the number 0, to count vowels down the line
// intialize storage space for copy of the string for the function
// intialize storage space for a ltter that will be used for the analyze process
// perform an iteration process, for how long the word is
// retrieve each word, analyze it, compare to the vowels, if so, add it counter, if not, move onto the next word
// once the iteration is over, return the storage space number.
function numVowels(string) {
  var analyzeString = string;
  var vowelNumber = 0;
  var analyzeLetter = '';
  for (var i = 0; i < analyzeString.length; i++) {
    analyzeLetter = analyzeString.charAt(i);
    analyzeLetter = analyzeLetter.toUpperCase();

    if ((analyzeLetter === 'A') ||
      (analyzeLetter === 'E') ||
      (analyzeLetter === 'I') ||
      (analyzeLetter === 'O') ||
      (analyzeLetter === 'U')) {
      vowelNumber++;
    }
  }
  return vowelNumber;
}
