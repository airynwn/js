// Conociendo el identificador
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];

//Conociendo el número de formulario
var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

window.onload = iniciar; //Sin paréntesis

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    // Comprobamos si es no vacio
    if (elemento.value == "") {
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    // Comprobamos si el dato es numérico
    if (isNaN(elemento.value)) {
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;
}

function validaFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    // Generamos la fecha con la siguiente función
    var fecha = new Date(ano, mes, dia);
    // Comprobamos si el dato es numérico
    if (isNaN(fecha)) {
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}

// Comprobamos si sigue seleccionado el elemento checkeado.
function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    // Comprobamos si el elemento ha sido seleccionado.
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false
    }
    return true;
}

// Creamos la función que compruebe si se ha validado todos los campos
function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

// Al elemento que no cumpla las condiciones le asociamos la clase error y ademas a ese elemento tenga el foco
function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

// Eliminamos la clase error de un elemento
function limpiarError(elemento) {
    elemento.className = "";
}