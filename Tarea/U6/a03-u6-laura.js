function Vehiculo(marca, modelo, color, ano_fabricacion) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.ano_fabricacion = ano_fabricacion;
}

let boton = document.getElementById("crearTabla");
boton.addEventListener("click", crearTabla);

function crearTabla() {
    let vehi1, vehi2, vehi3, vehi4, vehi5;
    let vehiculos = [vehi1, vehi2, vehi3, vehi4, vehi5];

    for (let i in vehiculos) {
        vehiculos[i] = new Vehiculo(
            prompt("Marca:"),
            prompt("Modelo:"),
            prompt("Color:"),
            prompt("Año de fabricación:")
        );
    }

    let tabla = document.createElement("table");
    // Cabecera
    let thead = document.createElement("thead");
    for (let campo of ["Marca", "Modelo", "Color", "Año Fabricación"]) {
        let th = document.createElement("th");
        let campotext = document.createTextNode(campo);
        th.appendChild(campotext);
        thead.appendChild(th);
    }
    tabla.appendChild(thead);
    // Cuerpo
    let tbody = document.createElement("tbody");
    for (let i in vehiculos) {
        let row = document.createElement("tr");
        for (let propiedad in vehiculos[i]) {
            let td = document.createElement("td");
            let celdatext = document.createTextNode(vehiculos[i][propiedad]);
            td.appendChild(celdatext);
            row.appendChild(td);
        }       
        tbody.appendChild(row);
    }
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}