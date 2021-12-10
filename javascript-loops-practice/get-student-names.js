/* exported getStudentNames */
function getStudentNames(students) {
  var keys = [];
  for (var i = 0; i < students.length; i++) {
    keys.push(students[i].name);
  }
  return keys;
}
