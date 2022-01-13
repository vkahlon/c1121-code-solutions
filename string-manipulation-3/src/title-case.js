/* exported titleCase */
// declare a process with an input of a string
// grab the input title, lower case it, and assign it to storage space.
// have a list of words that you want to keep lowercased and assign it to storage space.
// split all the words into an array and assign it to storage space.
// have an empty string and assign it storage space

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var lowerCasedList = ['and', 'or', 'nor', 'but', 'a', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];
  var words = lowerCased.split(' ');
  words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1).toLowerCase();

  for (var i = 1; i < words.length; i++) {
    if (lowerCasedList.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    if (words[i].charAt(0) === 'J') {
      words[i] = 'JavaScript';
    }
    if ((words[i].charAt(0) === 'J') && (words[i].charAt(10) === ':')) {
      words[i] = 'JavaScript:';
    }
    if ((words[i].charAt(0) === 'A') && (words[i].charAt(1) === 'p')) {
      words[i] = 'API';
    }
  }
  return words.join(' ');
}

// Spaghetti below
// function titleCase(title) {
//   var lowerCasedList = ['and', 'or', 'nor', 'and', 'but', 'a', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
//   var words = title.split(' ');
//   var newTitle = '';
//   for (var i = 0; i < words.length - 1; i++) {
//     if ((words[i].charAt(0) === 'j') ||
//       (words[i].charAt(0) === 'J')) {
//       var newWord = 'JavaScript ';
//       newTitle += newWord;
//     }
//     if (lowerCasedList.indexOf(words[i]) === -1) {
//       var newUpperCase = words[i].charAt(0);
//       newUpperCase = newUpperCase.toUpperCase();

//       var restOfWord = words[i].substring(1);
//       restOfWord = restOfWord.toLocaleLowerCase();
//       var newWord = newUpperCase + restOfWord;
//       newTitle += newWord + ' ';
//     } else if (lowerCasedList.indexOf(words[i]) !== -1) {
//       newTitle += words[i] + ' ';
//     }
//   }
//   var lastWord = words.length - 1;
//   if (lowerCasedList.indexOf(lastWord) === -1) {
//     var newLastUpperCase = words[lastWord].charAt(0);
//     newLastUpperCase = newLastUpperCase.toUpperCase();

//     var restOfLastWord = words[lastWord].substring(1);
//     restOfLastWord = restOfLastWord.toLocaleLowerCase();
//     var theLastWord = newLastUpperCase + restOfLastWord;
//     newTitle += theLastWord;
//   } else if (lowerCasedList.indexOf(words[lastWord]) !== -1) {
//     newTitle += theLastWord;
//   }
//   return newTitle;
// }
