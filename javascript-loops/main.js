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
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    console.log(word, repeated);
    count++;
  }
}
function logEachCharacter(string) {
  var i = 0;
  while (i < string.length) {
    console.log(string[i]);
    i++;
  }
}
function doubleAll(numbers) {
  var doubleArray = [];
  var i = 0;
  while (i < numbers.length) {
    doubleArray.push(numbers[i] * 2);
    i++;
  }
  return doubleArray;
}

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
