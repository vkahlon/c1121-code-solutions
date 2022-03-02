/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const cheater = queue.dequeue();
  queue.enqueue(cheater);
  return queue.dequeue();
}
