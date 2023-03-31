// Here are few examples of using destructuring in functions:
// passing object as argument (with default variable assignment)
function printFullName({ firstName = 'Unknown', lastName = 'Unknown' }) {
  console.log(`movie character: ${firstName} ${lastName}`);
}
const mando = {
  firstName: 'Din',
  lastName: 'Djarin',
};
const highMagistrate = {
  firstName: 'Greef',
  lastName: 'Karga',
};
printFullName(mando); // => movie character: Din Djarin
printFullName(highMagistrate); // => movie character: Greef Karga






