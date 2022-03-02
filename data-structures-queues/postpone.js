/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const cheater = queue.dequeue();
  return queue.enqueue(cheater);
}
