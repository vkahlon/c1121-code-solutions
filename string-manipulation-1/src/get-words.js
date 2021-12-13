/* exported getWords */
// For this procedure, we will take a string and place it into an array
// -These Strings can be multiple words, therefore the split process will be employed.
// To take account for an empty string, a stict equality of comparsion of the string and empty string will be compared
// if it matches, the string will be split and returned.
// In any other case, the string will be split whenever a space occurs, will be stored into an array via method
// the array will be returned via the words storage space.
function getWords(string) {
  var words = '';
  if (string === '') {
    words = string.split('');
    return words;
  } else {
    words = string.split(' ');
    return words;
  }
}
