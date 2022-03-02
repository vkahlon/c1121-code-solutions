/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  let first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  while (first > queue.peek()) {
    queue.enqueue(first);
    first = queue.peek();
  }
  let second = queue.dequeue();
  while (second > queue.peek()) {
    queue.enqueue(second);
    second = queue.peek();
  }
  return queue.peek();

}
