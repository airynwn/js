// Pasar de HTMLCollection a Array para recorrerlo con forEach
let inputs = Array.prototype.slice.call(document.getElementsByTagName("input"));

let activar = document.getElementById("activar");

activar.addEventListener("click", () => {
    inputs.forEach(e => {
        // Activar cada input
        e.removeAttribute("disabled");
    });
});

let desactivar = document.getElementById("desactivar");

desactivar.addEventListener("click", () => {
    inputs.forEach(e => {
        // Desactivar cada input
        e.setAttribute("disabled", "disabled");
    });
});