/* exported countdown */
function countdown(number) {
  var numberList = [];
  for (number; number >= 0; number--) {
    numberList.push(number);
  }
  return numberList;
}
