const tabla = document.getElementById("tabla");

function crearTabla() {
    let filas = parseInt(prompt("Número de filas: ", 1))
    let cols = parseInt(prompt("Número de columnas: ", 1))

    const tbody = document.createElement("tbody");

    for (let f = 0; f < filas; f++) {
        let tr = document.createElement("tr");
        for (let c = 0; c < cols; c++) {
            let td = document.createElement("td");
            let tdtexto = document.createTextNode(prompt(`Texto fila ${f} columna ${c}`));
            td.appendChild(tdtexto);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
}