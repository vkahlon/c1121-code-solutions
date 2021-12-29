var textSelector = document.querySelector('h1');
var timer = setInterval(countDown, 1000);
var theCountDown = 4;
function countDown() {
  theCountDown--;
  textSelector.textContent = theCountDown;
  if (theCountDown === 0) {
    textSelector.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
  return theCountDown;
}
