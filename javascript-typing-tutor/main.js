function recordKey(event) {
}

var $letterSelectorAll = document.querySelectorAll('html');
for (var i = 0; i < $letterSelectorAll.length; i++) {
  $letterSelectorAll[i].addEventListener('keydown', recordKey);
}
