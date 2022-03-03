/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return list.data;
  }
  while (list) {
    if (!list.next.next) {
      list.next = null;
      return list;
    }
    list = list.next;
  }
}
