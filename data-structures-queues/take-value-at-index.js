/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  let cheaterCounter = 0;
  while (cheaterCounter < index) {
    const cheater = queue.dequeue();
    queue.enqueue(cheater);
    cheaterCounter++;
  }
  return queue.dequeue();
}
