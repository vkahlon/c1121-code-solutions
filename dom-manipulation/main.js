var buttonCount = 0;
function trackCount(event) {
  buttonCount++;
  var totalCount = 'Clicks: ' + buttonCount;
  $clickCount.textContent = totalCount;
  if (buttonCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (buttonCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (buttonCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (buttonCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (buttonCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (buttonCount >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
  return totalCount;
}
var $clickCount = document.querySelector('.click-count');

var $hotButton = document.querySelector('.hot-button');
$hotButton.addEventListener('click', trackCount);
