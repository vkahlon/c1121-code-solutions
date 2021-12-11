/* exported getWords */
// For this procedure, we will take a string and place it into an array
// -These Strings can be multiple words, therefore the split process will be employed.
// A iteration will run and will run the amount of words that are in the potential string.
// Need storage for the array before this iteration.
// In each iteration, it will split the word, depending where it is in the index, and then push it into the storage, that was created earlier.
// Once loop has been completed, it will return the value of the array.
function getWords(string) {
  var wordArray = [];
  // needs modification
  // if (string === ' ') {
  // wordArray.split(string.length);
  if (string === ' ') {
    wordArray.push(string.slice(0));
  }
  if (string !== '') {
    wordArray.push(string);
  }
  return wordArray;
}
