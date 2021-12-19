/* exported swapChars */
// declare a prcoess with takes in three inputs: number, number and a phrase.
// need storage space to assign the string for convenience.
// need storage space to assign a letter from the first number at the phrase
// need storage space to assign a letter from the second number at the phrase.
// access stroage space, split it and convert it into an list.
// access storage space list, rearragne it once, from first number area and insert second number letter.
// access storage space list, rearragne it once, from 2nd number area and insert first number letter.
// need storage space, convert the list back into a phrase and store it in this space
// return the previous steps's storage space

function swapChars(firstIndex, secondIndex, string) {
  var newString = string;
  var newLetter1 = newString.charAt(firstIndex);
  var newLetter2 = newString.charAt(secondIndex);
  newString = newString.split('');
  newString.splice(firstIndex, 1, newLetter2);
  newString.splice(secondIndex, 1, newLetter1);
  var newWord = newString.join((''));
  return newWord;
}
