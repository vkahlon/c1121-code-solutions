/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  } else {
    const firstItem = stack.pop();
    stack.push(value);
    stack.push(firstItem);
    return stack;
  }
}
