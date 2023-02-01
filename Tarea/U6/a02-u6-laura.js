/*
Crear un código en HTLM en el que tengamos un boton para añadir nodos
y otro para eliminar nodos.

Los nodos creados y eliminados serán elementos nuevos
(<div>) del documento HTML, donde se deberá escribir un texto
solicitado al cliente (por ejemplo por prompt).

El código de crear, asi como de eliminar nodos deberá estar
en JavaScript. Utilizando el manejo del DOM.
*/

let actividad = document.getElementById("actividad");

let anadir = document.getElementById("anadir");

anadir.addEventListener("click", () => {
    // Añade un div con el texto que se introduce
    let div = document.createElement("div");
    let text = document.createTextNode(prompt("Escribe el texto del div: "));
    div.appendChild(text);
    actividad.appendChild(div);
});

let eliminar = document.getElementById("eliminar");

eliminar.addEventListener("click", () => {
    // Elimina el último div
    actividad.removeChild(actividad.lastChild);
});