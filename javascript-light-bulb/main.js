var lightStatus = false;
function letThereBeLight(event) {

  if (lightStatus === false) {
    $lightButton.className = 'button-on';
    $lightBackground.className = 'row background-color on';
    lightStatus = true;
  } else {
    $lightButton.className = 'button-off';
    $lightBackground.className = 'row background-color off';
    lightStatus = false;
  }
}
var $lightButton = document.querySelector('.button-off');
var $lightBackground = document.querySelector('.background-color.off');
$lightButton.addEventListener('click', letThereBeLight);
