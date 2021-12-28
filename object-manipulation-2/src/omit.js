/* exported omit */
function omit(source, keys) {
  for (var captKey in keys) {
    if (captKey.includes(source)) {
      keys[captKey] = source[captKey];
    }
  }
  return source;
}
