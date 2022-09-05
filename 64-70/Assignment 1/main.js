function getDetails(zName, zAge, zCountry) {
  let name = 'Hello ',
      age = 'Your Age Is ',
      country = 'You live In ',
      z = zName.indexOf(" ");
  function namePattern(zName) {
    return name += zName.slice(0, z) + zName.slice(z, z + 2).toUpperCase() + '.';
  }
  function ageWithMessage(zAge) {
    return age += parseInt(zAge);
  }
  function countryTwoLetters(zCountry) {
    return country += zCountry[0] + zCountry[1].toUpperCase();
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY