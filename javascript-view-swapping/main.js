function callBack(event) {
  var targetMatch = event.target;
  if (!event.target.matches('.tab')) {
    return;
  }
  if (targetMatch.matches('.tab')) {
    for (var i = 0; i < $tabCollection.length; i++) {
      if ($tabCollection[i] === targetMatch) {
        $tabCollection[i].className = 'tab active';
      } else {
        $tabCollection[i].className = 'tab';
      }
    }
  }
  for (i = 0; i < $viewCollection.length; i++) {
    var dataViewValue = targetMatch.getAttribute('data-view');

    if ($viewCollection[i].getAttribute('data-view') === dataViewValue) {
      $viewCollection[i].className = 'view';
    } else {
      $viewCollection[i].className = 'view hidden';
    }
  }
}

var $tabContainer = document.querySelector('.tab-container');
var $tabCollection = document.querySelectorAll('.tab');
var $viewCollection = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', callBack);
