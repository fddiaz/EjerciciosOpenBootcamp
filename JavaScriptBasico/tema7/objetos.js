const datosPesonales = {
    nombre: "Federico",
    apellido: "Diaz",
    edad: 42,
    altura: 182,
    eresDesarrollador: true
}
console.log(datosPesonales);

const edad = datosPesonales.edad;
console.log(edad);

const listaDeAmigos = [
    {
        ...datosPesonales
    }, {
        nombre: "Augusto",
        apellido: "Schaumburg",
        edad: 43,
        altura:185,
        eresDesarrollador: true
    } , {
        nombre: "Perla",
        apellido: "Prat",
        edad: 40,
        altura: 165,
        eresDesarrollador: false
    }
]
console.log(listaDeAmigos);

const listaOrdenadaPorEdad = listaDeAmigos.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenadaPorEdad);
