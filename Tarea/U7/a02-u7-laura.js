let ciudad = document.getElementById("ciudad");

ciudad.addEventListener("keyup", mostrarSugerencia);

function mostrarSugerencia() {
    let inputCiudad = ciudad.value;
    if (inputCiudad.length == 0) {
        document.getElementById("sugerencia").innerHTML = "";
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sugerencia").innerHTML = this.responseText;
        }
    };
        xmlhttp.open("GET", "ciudadessugerencias.php?q=" + inputCiudad, true);
        xmlhttp.send();
    }
}