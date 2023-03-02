const crear = document.getElementById("creadordiv");
const eliminar = document.getElementById("borradornodo");
const body = document.documentElement.lastChild;

crear.addEventListener("click", crearDiv);
eliminar.addEventListener("click", borrarNodo);

function crearDiv() {
    // Entiendo que lo que hace es crear un div y un p dentro con texto
    const div = document.createElement("div");
    const texto = document.createTextNode(prompt("Texto a introducir en el div: "));
    const p = document.createElement("p");
    p.appendChild(texto);
    div.appendChild(p);
    body.appendChild(div);
}

function borrarNodo() {
    body.removeChild(body.lastChild);
}