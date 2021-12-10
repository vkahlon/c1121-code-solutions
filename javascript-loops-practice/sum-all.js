/* exported sumAll */
function sumAll(numbers) {
  var sumNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumNumber += numbers[i];
  }
  return sumNumber;
}
