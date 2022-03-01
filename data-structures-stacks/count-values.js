/* exported countValues */

function countValues(stack) {
  let stackTwo = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    stackTwo++;
  }
  return stackTwo;
}
