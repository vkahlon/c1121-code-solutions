var clickCount = 0;
var clickStatus = false;
function letThereBeLight(event) {
  clickCount++;
  if (clickCount % 2 === 1) {
    clickStatus = true;
  } else {
    clickStatus = false;
  }
  if (clickStatus === true) {
    $lightButton.className = 'button-on';
    $lightBackground.className = 'row background-color on';
  } else {
    $lightButton.className = 'button-off';
    $lightBackground.className = 'row background-color off';
  }
}
var $lightButton = document.querySelector('.button-off');
var $lightBackground = document.querySelector('.background-color.off');
$lightButton.addEventListener('click', letThereBeLight);
