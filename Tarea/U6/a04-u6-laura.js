window.addEventListener("load", () => {
    let tabla = document.createElement("table");
    // Cabecera
    let thead = document.createElement("thead");
    for (let campo of ["Nombre", "Módulo 1", "Módulo 2", "Módulo 3"]) {
        let th = document.createElement("th");
        let campotext = document.createTextNode(campo);
        th.appendChild(campotext);
        thead.appendChild(th);
    }
    tabla.appendChild(thead);
    // Cuerpo
    let tbody = document.createElement("tbody");
    let alu1, alu2, alu3, alu4, alu5;
    const ALUMNOS = [alu1, alu2, alu3, alu4, alu5];

    for (let i in ALUMNOS) {
        ALUMNOS[i] = [
            prompt("Nombre del alumno:"),
            prompt("Nota en el módulo 1:"),
            prompt("Nota en el módulo 2:"),
            prompt("Nota en el módulo 3:")
        ];
    }
    for (let i in ALUMNOS) {
        let row = document.createElement("tr");
        for (let j in ALUMNOS[i]) {
            // Notas
            let td = document.createElement("td");
            let rowtext = document.createTextNode(ALUMNOS[i][j]);
            td.appendChild(rowtext);
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);

});