const fechaActual = new Date();
console.log(fechaActual);

const fechaDeNacimiento = new Date("August 22, 1980");
console.log(fechaDeNacimiento);

const esMasTarde = fechaActual > fechaDeNacimiento;
console.log(esMasTarde);

const diaNacimiento = fechaDeNacimiento.getDate();
const mesNacimiento = fechaDeNacimiento.getMonth() + 1;
const anyoNacimiento = fechaDeNacimiento.getFullYear();

console.log(diaNacimiento, "/",  mesNacimiento, "/", anyoNacimiento);