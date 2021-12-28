/* exported defaults */
// define a process with two entities
// create an iteration, that iterates items within an entity
// to prevent overwritten, do a check to see if these items are not in target, and if they arent
// give them a value in target
// return the target
function defaults(target, source) {
  for (var captKey in source) {
    if (!(captKey in target)) {
      target[captKey] = source[captKey];
    }
  }
  return target;
}
