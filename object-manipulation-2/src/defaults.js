/* exported defaults */
function defaults(target, source) {
  for (var captKey in source) {
    if (!(captKey in target)) {
      target[captKey] = source[captKey];
    }
  }
  return source;
}
