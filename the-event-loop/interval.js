let currentCount = 3;
const timer = setInterval(workCount, 1000);
function workCount(event) {
  if (currentCount === 0) {
    console.log('NOW!');
    clearInterval(timer);
    return currentCount;
  }
  console.log(currentCount);
  currentCount--;
  return currentCount;
}
