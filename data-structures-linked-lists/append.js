/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const theEnd = new LinkedList(value);
  if (!list.next) {
    return list.data;
  }
  let backupState;
  while (list) {
    backupState = list;
    list = list.next;
  }
  backupState.next = theEnd;
  return backupState;
}
