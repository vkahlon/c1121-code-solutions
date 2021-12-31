/* exported isPalindromic */
// Edge-case: if there's space or spaces, remove the spaces, then have it run the loop
// declare a process, have it take in a single word
// assign storage space for a word, that at this momment, is empty
// for the edge case, utilize the replaceAll technique to reduce any spaces if it exists. Assign it to new word storage space.
// create an iteration, start index at input word's character count, have run till the index reaches zero
// inside the iteration, grab the character at index from the input word, and assign it the storage space empty word
// compare the storage space word with the input word, if it matches, return true, if not, return false.
// Edge-case: if there's space or spaces, remove the spaces, then have it run the loop
function isPalindromic(string) {
  var reverseWord = '';
  var newWord = string.replaceAll(' ', '');
  for (var index = newWord.length - 1; index >= 0; index--) {
    reverseWord += newWord[index];
  }
  if (reverseWord === newWord) {
    return true;
  } else {
    return false;
  }
}
