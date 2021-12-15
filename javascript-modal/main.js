var isModalOpen = false;
function callMod(event) {
  if (isModalOpen === false) {
    $convertModa.className = 'row modal-window';
    $convertOverlay.className = 'overlay active';
    isModalOpen = true;
  } else {
    $convertModa.className = 'row modal-window-hidden';
    $convertOverlay.className = 'overlay inactive';
    isModalOpen = false;
  }
}

var $selectModa = document.querySelector('button.open-moda');
$selectModa.addEventListener('click', callMod);

var $closeModa = document.querySelector('button.no-moda');
$closeModa.addEventListener('click', callMod);

var $convertModa = document.querySelector('.row.modal-window-hidden');
var $convertOverlay = document.querySelector('.overlay.inactive');
