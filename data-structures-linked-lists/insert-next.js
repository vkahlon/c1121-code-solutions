/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const cloneList = new LinkedList(value);
  const listRemainder = list.next;
  cloneList.next = listRemainder;
  list.next = cloneList;
}
