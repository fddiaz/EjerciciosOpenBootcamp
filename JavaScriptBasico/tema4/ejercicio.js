let firstName="Federico";
let lastName="Diaz";

let estudiante = firstName + " " + lastName;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let letters = estudiante.length;

let fistLetter = firstName.charAt(0);
let lastLetter = lastName.slice(-1);

let whitoutSpace = estudiante.replace(/\s+/g,'');

let isInBoolean = estudiante.includes(firstName);