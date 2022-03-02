/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const secondView = queue.peek();
  if (secondView < first) {
    queue.enqueue(first);
    return queue.dequeue();
  } else {
    const second = queue.dequeue();
    queue.enqueue(second);
    return first;
  }
}
