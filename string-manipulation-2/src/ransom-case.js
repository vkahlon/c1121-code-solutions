/* exported ransomCase */
// lowercase the entire string and assign it to a new storage space
function ransomCase(string) {
  var lowerString = string.toLowerCase();
  for (var i = 1; i < lowerString.length; i += 2) {
    var upperLetter = lowerString.charAt(i);
    upperLetter = upperLetter.toUpperCase();
  }
  return upperLetter;
}
