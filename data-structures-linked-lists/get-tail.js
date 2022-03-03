/* exported getTail */

function getTail(list) {
  if (!list.next) {
    return list.data;
  }
  let backupState;
  while (list) {
    backupState = list;
    list = list.next;
  }
  return backupState.data;
}
