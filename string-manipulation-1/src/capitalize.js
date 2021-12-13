/* exported capitalize */
function capitalize(word) {
// In this procedure, you'll need to split the word, uppercase one aspect and lowercase the other aspect, and then combine them together //
// The charAt process will grab the first letter of the word, hand it to the UpperCase process and spit the letter will be uppercased //
// The slice process will chop off the first letterm grab the rest of the word, hand it over to the lowerCase process //
// The lowerCase process will find any uppercase letters, lower it, and spit out the sliced word in lowercase //
// The last part of the procedure, the return will reunite these two words and combine them into one word, with a new makeover. //
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
