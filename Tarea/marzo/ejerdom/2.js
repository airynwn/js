document.getElementById("crearParrafo").addEventListener("click", crearParrafo);
document.getElementById("crearImagen").addEventListener("click", crearImagen);
document.getElementById("borrarPrimero").addEventListener("click", borrarPrimero);
document.getElementById("borrarUltimo").addEventListener("click", borrarUltimo);
document.getElementById("vaciarPrimero").addEventListener("click", vaciarPrimero);

const div = document.getElementById("div1");

function crearParrafo() {
    let parrafo = document.createElement("p");
    // Texto del textarea
    parrafo.appendChild(document.createTextNode(document.getElementById("texto").value))
    div.appendChild(parrafo);
}

function crearImagen() {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", prompt("Ruta de la imagen: "));
    div.appendChild(imagen);
}

function borrarPrimero() {
    div.removeChild(div.firstChild);
}

function borrarUltimo() {
    div.removeChild(div.lastChild);
}

// Sustituir
function vaciarPrimero() {
    let primero = div.firstChild;
    let parrafo = document.createElement("p");
    parrafo.appendChild(document.createTextNode("Vacío"));
    div.replaceChild(parrafo, primero);
}