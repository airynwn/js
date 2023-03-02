window.addEventListener("load", () => {
    let tabla = document.createElement("table");
    // Cabecera
    let thead = document.createElement("thead");
    for (let campo of ["Marca", "Diseño", "Precio", "Calidad"]) {
        let th = document.createElement("th");
        let campotext = document.createTextNode(campo);
        th.appendChild(campotext);
        thead.appendChild(th);
    }
    tabla.appendChild(thead);
    // Cuerpo
    let tbody = document.createElement("tbody");
    let ropa1, ropa2, ropa3, ropa4, ropa5;
    const ROPAS = [ropa1, ropa2, ropa3, ropa4, ropa5];

    for (let i in ROPAS) {
        ROPAS[i] = [
            prompt("Nombre de la marca de ropa:"),
            parseInt(prompt("Valoración del diseño:")),
            parseInt(prompt("Valoración del precio:")),
            parseInt(prompt("Valoración de la calidad:"))
        ];
    }
    for (let i in ROPAS) {
        let row = document.createElement("tr");
        for (let j in ROPAS[i]) {
            let td = document.createElement("td");
            let rowtext = document.createTextNode(ROPAS[i][j]);
            td.appendChild(rowtext);
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);

});