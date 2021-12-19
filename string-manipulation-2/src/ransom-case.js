/* exported ransomCase */
// declaring a new process which takes a input of a phrase
// lowercase the entire string and assign it to a new storage space
// implement a for loop, have it start at index one as it's every other character
// have it run until it reaches the lowerstring length and increment by two since we're using every other two letters.
// have the index begin at 0, ends at index, uppercase the index, and again start index, end at index by 1
// allocate storage space and assign the storage space to the one that was just created
// return the storage space that was created in the previous step
function ransomCase(string) {
  var lowerString = string.toLowerCase();
  for (var i = 1; i < lowerString.length; i += 2) {
    lowerString = lowerString.substring(0, i) + lowerString[i].toUpperCase() + lowerString.substring(i + 1);
    var newString = lowerString;
  }
  return newString;
}
