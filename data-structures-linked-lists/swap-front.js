/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const remainder = list.next.next;
    const second = list.next;
    list.next = remainder;
    second.next = list;
    return second;
  }
  return list;
}
