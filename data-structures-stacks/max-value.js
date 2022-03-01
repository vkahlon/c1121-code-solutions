/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let stackTwo = stack.pop();
    let stackCheck = stackTwo;
    while (stack.peek() !== undefined) {
      stackTwo = stack.pop();
      if (stackTwo > stackCheck) {
        stackCheck = stackTwo;
      }
    }
    return stackCheck;
  }
}
