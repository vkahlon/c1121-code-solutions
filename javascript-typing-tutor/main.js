function keyComplete(event) {
  $letterSelectorAll.textContent += event;

}
var $letterSelectorAll = document.querySelectorAll('span');
$letterSelectorAll.addEventListener('keydown', keyComplete);
