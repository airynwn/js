let ciudad = document.getElementById("ciudad");

// Al pulsar una tecla, se ejecuta la función mostrarSugerencia
ciudad.addEventListener("keyup", mostrarSugerencia);

function mostrarSugerencia() {
    // Toma el valor que ha introducido el usuario en el buscador de ciudades
    let inputCiudad = ciudad.value;

    // Si está vacío, no muestra ninguna sugerencia
    if (inputCiudad.length == 0) {
        document.getElementById("sugerencia").innerHTML = "";
        return;
    } else {
        // Si contiene algo, crea el objeto XMLHttpRequest para buscar sugerencias en el servidor
        let xmlhttp = new XMLHttpRequest();

        // Crea una función que se ejecutará en cada cambio de estado
        xmlhttp.onreadystatechange = function() {
            // Si el estado del objeto es completado (4) y ha tenido éxito (200):
            if (this.readyState == 4 && this.status == 200) {
                // Muestra como cadena las sugerencia de ciudades para el parámetro enviado al servidor
                document.getElementById("sugerencia").innerHTML = this.responseText;
            }
        }
    /*
        Realiza la petición GET al servidor de manera asíncrona a la URL ciudadessugerencias.php
        enviándole el parámetro ( ?q=inputCiudad ) para buscar las sugerencias correspondientes
    */
        xmlhttp.open("GET", "ciudadessugerencias.php?p=" + inputCiudad, true);
        xmlhttp.send();
    }
}