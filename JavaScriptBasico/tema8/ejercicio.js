/// Una función sin parámetros que devuelva siempre "true"
function devuelveTrue() {
    return true;
}

console.log(devuelveTrue());

/// Una función asíncrona que utilice un setTimeout y pase por consola un
/// "Hola soy una promesa" 5 segundos después de haberse ejecutado

const timeout = setTimeout(myFunction, 5000);
function myFunction() {
    return Promise.resolve("Hola soy una promesa");
}

myFunction().then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.log("Error");
    }
);

/// Una función generadora de índices pares automáticos

function* indexGen() {
    let index = 0;
    while(true) yield index += 2;
}

const idGen = indexGen();

console.log(idGen.next());
console.log(idGen.next());