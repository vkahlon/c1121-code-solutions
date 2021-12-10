/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWordArray = [];
  for (var i = 0; i < words.length; i++) {
    var newWords = words[i] + suffix;
    newWordArray.push(newWords);
  }
  return newWordArray;
}
addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity');
