const texto = document.getElementById("texto");
const clase = document.getElementById("clase");
const quita = document.getElementById("quita");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

texto.addEventListener("click", cambiaTexto);
clase.addEventListener("click", cambiaClase);
quita.addEventListener("click", quitaClase);

function cambiaTexto() {
    p1.innerHTML = "cambia primer parrafo";
    p2.innerHTML = "cambia segundo parrafo";
    p3.innerHTML = "cambia tercer parrafo";
}

function cambiaClase() {
    // p1.setAttribute("class", "rojo");
    // p2.className = "rojo";
    // p3.classList.add("rojo");

    for (i of document.getElementsByTagName("p")) {
        i.className = "rojo";
    }
}

function quitaClase() {
    // p1.setAttribute("class", "");
    // p2.className = "";
    // p3.classList.remove("rojo");

    for (i of document.getElementsByTagName("p")) {
        i.className = "";
    }
}