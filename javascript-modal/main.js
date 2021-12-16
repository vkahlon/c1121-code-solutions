var isModalOpen = false;
function callMod(event) {
  if (isModalOpen === false) {
    $convertModal.className = 'row modal-window';
    $convertOverlay.className = 'overlay active';
    isModalOpen = true;
  } else {
    $convertModal.className = 'row modal-window-hidden';
    $convertOverlay.className = 'overlay inactive';
    isModalOpen = false;
  }
}

var $selectModal = document.querySelector('button.open-modal');
$selectModal.addEventListener('click', callMod);

var $closeModal = document.querySelector('button.no-modal');
$closeModal.addEventListener('click', callMod);

var $convertModal = document.querySelector('.row.modal-window-hidden');
var $convertOverlay = document.querySelector('.overlay.inactive');
