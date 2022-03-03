/* exported getLength */

function getLength(list) {
  if (!list.next) {
    return 1;
  }
  let counter = 0;
  while (list) {
    counter++;
    list = list.next;
  }
  return counter;
}
