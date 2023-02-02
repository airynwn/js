let ocultar = document.getElementById("ocultar");

ocultar.addEventListener("click", () => {
    let num = prompt("¿Qué párrafo deseas ocultar? 1, 2 ó 3: ");
    let p = document.getElementById("p" + num);
    p.classList = [];
    p.classList.add("oculto");
});

let visualizar = document.getElementById("visualizar");

visualizar.addEventListener("click", () => {
    let num = prompt("¿Qué párrafo deseas visualizar? 1, 2 ó 3: ");
    let p = document.getElementById("p" + num);
    p.classList = [];
    p.classList.add("visible");
});