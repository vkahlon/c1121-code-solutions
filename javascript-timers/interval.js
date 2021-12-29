var textSelector = document.querySelector('h1');
var theCountDown = setInterval(countDown, 1000);
var count = 4;
function countDown() {
  if (count === (4)) {
    textSelector.textContent = '3';
    return count--;
  } else if (count === (3)) {
    textSelector.textContent = '2';
    return count--;
  } else if (count === (2)) {
    textSelector.textContent = '1';
    return count--;
  } else if (count === (1)) {
    textSelector.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(theCountDown);
    return count--;
  }
}
