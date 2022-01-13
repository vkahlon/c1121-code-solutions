var imgSource = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imgSelector = document.querySelector('.img-wrapper');
var bullets = document.querySelectorAll('.fa-circle');
var timeID = setInterval(swapItem, 3000);
var theCount = 0;

function swapItem() {
  theCount++;
  if (theCount === 5) {
    theCount = 0;
    bullets[4].className = 'far fa-circle';
    bullets[theCount].className = 'fas fa-circle';
    imgSelector.setAttribute('src', imgSource[theCount]);
  }
  bullets[theCount - 1].className = 'far fa-circle';
  bullets[theCount].className = 'fas fa-circle';
  imgSelector.setAttribute('src', imgSource[theCount]);
}
var clickAButton = document.querySelector('.bullets');
clickAButton.addEventListener('click', clickButton);

function clickButton(event) {
  for (var i = 0; i < bullets.length; i++) {
    if (bullets[i] === event.target) {
      bullets[theCount].className = 'far fa-circle';
      bullets[i].className = 'fas fa-circle';
      imgSelector.setAttribute('src', imgSource[i]);
      theCount = i;
      timeOut();
    } else {
      bullets[i].className = 'far fa-circle';
      timeOut();
    }
  }
}
var clickRight = document.querySelector('.fa-angle-right');
clickRight.addEventListener('click', moveRight);
var clickLeft = document.querySelector('.fa-angle-left');
clickLeft.addEventListener('click', moveLeft);

function moveRight(event) {
  theCount++;
  if (theCount === 5) {
    theCount = 0;
    bullets[4].className = 'far fa-circle';
    bullets[theCount].className = 'fas fa-circle';
    imgSelector.setAttribute('src', imgSource[theCount]);
    timeOut();
  }
  bullets[theCount - 1].className = 'far fa-circle';
  bullets[theCount].className = 'fas fa-circle';
  imgSelector.setAttribute('src', imgSource[theCount]);
  timeOut();
}

function moveLeft(event) {
  theCount--;
  if (theCount === -1) {
    theCount = 4;
    bullets[0].className = 'far fa-circle';
    bullets[theCount].className = 'fas fa-circle';
    imgSelector.setAttribute('src', imgSource[theCount]);
    timeOut();
  }
  bullets[theCount + 1].className = 'far fa-circle';
  bullets[theCount].className = 'fas fa-circle';
  imgSelector.setAttribute('src', imgSource[theCount]);
  timeOut();
}
function timeOut() {
  clearInterval(timeID);
  timeID = setInterval(swapItem, 3000);
}
