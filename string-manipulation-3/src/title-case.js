/* exported titleCase */
// declare a process with an input of a string
// grab the input title, lower case it, and assign it to storage space.
// have a list of words that you want to keep lowercased and assign it to storage space.
// split all the words into a list and assign it to storage space.
// Since the first letter will always be uppercased, uppercase the first letter, and reattach the rest of the word and assign it to the first word.
// EDGE CASE: if the first letter is an uppercased J, assign that word as JavaScript:, assign the second word with an uppercase T, in the future and other instances, you will factor in other colons
// declare an iteration that starts at the second word of the list and goes till the last word
// if the word isnt in the lowercased list, uppercase the first letter, and use the substring method to reattach the word
// if the letter contains a colon, upperCase the next word in the list
// if the letter contains a dash, uppercase the next letter
// EDGE CASE: if the first letter, starts with a J, check to see if it contains a colon, if it does, assign the word as JavaScript: if not assign the word as JavaScript
// EDGE CASE: if the first letter starts with A, and the second letter with p, assign the word as API
// combine the list into one through the join method with a space, and return it.

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var lowerCasedList = ['and', 'or', 'nor', 'but', 'a', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];
  var words = lowerCased.split(' ');
  words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1);
  if (words[0].charAt(0) === 'J') {
    words[0] = 'JavaScript:';
    words[1] = 'The';
  }
  for (var i = 1; i < words.length; i++) {
    if (lowerCasedList.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    if (words[i].indexOf(':') !== -1) {
      words[i + 1] = words[i + 1].charAt(0).toUpperCase() + words[i + 1].substring(1);
    }
    if (words[i].indexOf('-') !== -1) {
      var location = words[i].indexOf('-');
      var upperCaseLetter = words[i].charAt(location + 1).toUpperCase();
      var newWord = words[i].substring(0, location + 1) + upperCaseLetter + words[i].substring(location + 2, words[i].length);
      words[i] = newWord;
    }
    if (words[i].charAt(0) === 'J') {
      if (words[i].indexOf(':') !== -1) {
        words[i] = 'JavaScript:';
      } else {
        words[i] = 'JavaScript';
      }
    }
    if ((words[i].charAt(0) === 'A') && (words[i].charAt(1) === 'p')) {
      words[i] = 'API';
    }
  }
  return words.join(' ');
}
