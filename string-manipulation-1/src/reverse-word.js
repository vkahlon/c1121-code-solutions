/* exported reverseWord */
// For this procedure, we will be importing a word, and reverse the character count
// First need to have storage space for new word that comes out after the process
// In order to pull this off, we will need to implement with a loop that starts at 1
// and adds by 1 each iteration and goes until count reaches the equivalent to amount of characters inside the word.
// within the iteration, the charAt process works backward and this is accomplished by subtraction of the length of the object word.
// The character gets added to the reverseWord storage space, and may join together with any other previous characters throughout the iteration
// Once the iteration is done, it will return the value of the backward word.
function reverseWord(word) {
  var reverseWord = '';
  for (var i = 1; i <= word.length; i++) {
    reverseWord = reverseWord + word.charAt(word.length - i);
  }
  return reverseWord;
}
