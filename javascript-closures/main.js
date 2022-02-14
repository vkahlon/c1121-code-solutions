function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
console.log('Your Doctor Closure:', medicalSchool('Mordin Solus'));
console.log('Fake Attorney who sounds legit:', lawSchool('Cliff Hutchinson'));
