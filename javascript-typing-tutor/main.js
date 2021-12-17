function recordKey(event) {
}

var $letterSelectorAll = document.querySelectorAll('span');
for (var i = 0; i < $letterSelectorAll.length; i++) {
  $letterSelectorAll[i].addEventListener('keydown', recordKey);
}
