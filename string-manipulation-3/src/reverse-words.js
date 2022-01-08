/* exported reverseWords */
// declare a process with an input word
// split the word and store them into a list, split the word through a single space
// allocate storage space, one for the last word, one for rest of the words
// Declare an iteration, have it run till the word length minus 1, incremement it by 1 each time it completes
// grab a word by its index, and assign it to storage space
// assign storage space for the reverse word
// run an iteration. runs by the letter count, but in reverse (decrements)
// in each iteration, grab the letter by index, and assign it to the dedicated storage space reverse word
// after the letter iteration, assign the reversed word to dedicated reverseWordExcept last Storage space, include a space at the end
// After the words iteration, assign the last word from the list into storage space
// declare an iteration, have run the amount of times by last word letter count, decrement it.
// inside the iteration, grab the letter by index, and assign it to the dedicated storage space reverseLastWord
// combine the reversedWordExceptLast and reverseLastWord storage space and assign it to new storage space, reversedPhrase.
// return the reversedPhrase Storage space.
function reverseWords(string) {
  var words = string.split(' ');
  var reversedWordExceptLast = '';
  var reverseLastWord = '';
  for (var i = 0; i < words.length - 1; i++) {
    var word = words[i];
    var revWord = '';
    for (var index = word.length; index >= 0; index--) {
      revWord += word.charAt(index);
    }
    reversedWordExceptLast += revWord + ' ';
  }
  var lastWord = words[words.length - 1];
  for (i = lastWord.length; i >= 0; i--) {
    reverseLastWord += lastWord.charAt(i);
  }
  var reversedPhrase = reversedWordExceptLast + reverseLastWord;
  return reversedPhrase;
}
