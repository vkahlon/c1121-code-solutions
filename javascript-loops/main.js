/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (currentNumber; currentNumber <= 10; currentNumber++) {
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (currentNumber; currentNumber <= 20; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (count; count <= times; count++) {
    console.log(word, repeated);
  }
}
function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
function doubleAll(numbers) {
  var doubleArray = [];
  for (var i = 0; i < numbers.length; i++) {
    doubleArray.push(numbers[i] * 2);
  }
  return doubleArray;
}
// need to finish//
function getKeys(object) {
  var keys = [];
  for (keys in object) {
    keys.push(object.key);
  }
  return keys;
}
