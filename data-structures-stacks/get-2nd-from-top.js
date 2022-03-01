/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const firstItem = stack.pop();
    const secondItem = stack.peek();
    stack.push(firstItem);
    return secondItem;
  }
}
