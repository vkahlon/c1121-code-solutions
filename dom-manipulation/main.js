var buttonCount = 0;
function trackCount(event) {
  buttonCount++;
  var totalCount = 'Clicks: ' + buttonCount;
  $clickCount.textContent = totalCount;
  if (buttonCount < 4) {
    $hotButton.className = 'hot-button cold';
  }
  if ((buttonCount >= 4) && (buttonCount < 7)) {
    $hotButton.className = 'hot-button cool';
  }
  if ((buttonCount >= 7) && (buttonCount < 10)) {
    $hotButton.className = 'hot-button tepid';
  }
  if ((buttonCount >= 10) && (buttonCount < 13)) {
    $hotButton.className = 'hot-button warm';
  }
  if ((buttonCount >= 13) && (buttonCount < 16)) {
    $hotButton.className = 'hot-button hot';
  }
  if (buttonCount >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
  return totalCount;
}
var $clickCount = document.querySelector('.click-count');
$clickCount.addEventListener('click', trackCount);
var $hotButton = document.querySelector('.hot-button');
$hotButton.addEventListener('click', trackCount);
