let button = document.querySelector("button")

button.addEventListener("click", () => (alert("click en el botón!")))

$("button").click(function() {
    console.log("Hola, estoy utilizando JQuery!");
})