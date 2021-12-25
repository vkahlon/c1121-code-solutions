var index = 0;
function recordKey(event) {
  if (event.key === $letterSelectorAll[index].textContent) {
    $letterSelectorAll[index].className = 'green-active';
    index++;
    $letterSelectorAll[index].className = 'the-underline';
  } else {
    $letterSelectorAll[index].className = 'wrong-active';
  }
  return index;
}
var $letterSelectorAll = document.querySelectorAll('span');
window.addEventListener('keydown', recordKey);
