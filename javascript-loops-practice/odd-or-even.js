/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEvenNumbers = [];
  var evenSit = 'even';
  var oddSit = 'odd';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEvenNumbers.push(evenSit);
    } else {
      oddEvenNumbers.push(oddSit);
    }
  }
  return oddEvenNumbers;
}
