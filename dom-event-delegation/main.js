function cBack(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var $closestItem = event.target.closest('LI');
    console.log('closest .task-list-item:', $closestItem);
    $closestItem.remove();
  }
}
var $clickListener = document.querySelector('.task-list');
$clickListener.addEventListener('click', cBack);
