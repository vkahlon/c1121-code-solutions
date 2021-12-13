/* exported truncate */
// in this process, it takes a input amount of characters and a word
//  it returns a value of the string with the omitted characters and an ellipsis.
// A new word will be allocated in storage space in order to preserve the original string.
// This process will utilize the slice method and its argument value will be the value of length.
// it will return the value of the shortened string concaneted with three dots.
function truncate(length, string) {
  var newWord = string;
  newWord.slice(length);
  return newWord + '...';
}
