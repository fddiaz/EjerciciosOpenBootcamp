const shoppingList = ["Pan", "Queso", "Leche", "Carne", "Harina"];
shoppingList.push("Aceite de Girasol");
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);

const films = [
    {
        titulo: "Tiempo de Valientes",
        director: "Damián Szifron",
        fecha: new Date(2005, 8, 29)
    },
    {
        titulo: "ReLoca",
        director: "Martino Zaidelis",
        fecha: new Date(2018, 6, 5)
    },
    {
        titulo: "Caballos salvajes",
        director: "Marcelo Piñeyro",
        fecha: new Date(1995, 7, 10)
    }
];

const newMovies = films.filter(films => films.fecha > new Date(2010, 0, 1));
console.log(newMovies);

const directores = films.map(films => {
    return films.director
})
console.log(directores);

const titulos = films.map(films => {
    return films.titulo
})
console.log(titulos);

const direcoresTitulos = directores.concat(titulos)
console.log(direcoresTitulos);

const direcoresTitulos2 = [...directores, ...titulos]
console.log(direcoresTitulos2)