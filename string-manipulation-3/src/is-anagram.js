/* exported isAnagram */
// Edge-case: if there's space or spaces, remove all spaces
// declare a process, have it take in two single words
// for the edge case, utilize the replace technique to remove all spaces if it exists for the first input. Assign it to new word storage space.
// for the edge case, utilize the replace technique to remove all spaces if it exists for the second input. Assign it to another new word storage space.
// convert storage space word one into a list with each characters, through split procedure
// convert storage space word two into a list with each characters, through split procedure
// in order to check if the two words are an anagram, must sort them by alphabetical order
// cant compare two lists directly, must wordify it, then compare the two words, if matches, return true, if not, it's false.
function isAnagram(firstString, secondString) {
  var newWordOne = firstString.replace(/\s/g, '');
  var newWordTwo = secondString.replace(/\s/g, '');
  newWordOne = newWordOne.split('');
  newWordTwo = newWordTwo.split('');
  newWordTwo.sort();
  newWordOne.sort();
  if (JSON.stringify(newWordOne) === JSON.stringify(newWordTwo)) {
    return true;
  } else {
    return false;
  }
}
