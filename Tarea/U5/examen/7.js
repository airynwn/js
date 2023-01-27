function validarNombre(){
    let campo = document.getElementById("nombre");

    if (/^[A-Z][a-z]+$/.test(campo.value)){
        return true;
    } else if (campo.value == null || campo.value.length == 0) {
        alert("El campo nombre no puede estar vacío");
    } else {
        alert("El patrón del nombre no es el correcto")
    }
    
    return false;
}

function validarApellido(){
    let campo = document.getElementById("apellido");

    if (/^[A-Z][a-z]+$/.test(campo.value)){
        return true;
    } else if (campo.value == null || campo.value.length == 0) {
        alert("El campo apellido no puede estar vacío");
    } else {
        alert("El patrón del apellido no es el correcto")
    }
    
    return false;
}

function validarEdad(){
    let campo = document.getElementById("edad");

    if (/^(\d{1,2}|1[01]\d|120)$/.test(campo.value)){
        return true;
    } else if (campo.value == null || campo.value.length == 0) {
        alert("El campo edad no puede estar vacío");
    } else {
        alert("El patrón de la edad no es el correcto")
    }
    
    return false;
}

function validarDNI(){
    let campo = document.getElementById("dni");

    if (/^\d{2}\.\d{3}.\d{3}-[A-Z]$/.test(campo.value)){
        return true;
    } else if (campo.value == null || campo.value.length == 0) {
        alert("El campo dni no puede estar vacío");
    } else {
        alert("El patrón del dni no es el correcto")
    }
    
    return false;
}

function validarLugar(){
    let campo = document.getElementById("lugar");

    if (/^[A-Z][a-z]{3,255}$/.test(campo.value)){
        return true;
    } else if (campo.value == null || campo.value.length == 0) {
        alert("El campo lugar de nacimiento no puede estar vacío");
    } else {
        alert("El patrón del lugar de nacimiento no es el correcto")
    }
    
    return false;
}


let guardar = document.getElementById("guardar");
guardar.addEventListener("click", validar);

function validar(e) {
    e.preventDefault();
    if (validarNombre() && validarApellido() && validarEdad() && validarDNI() && validarLugar()) {
        console.log("Los datos se han introducido correctamente");
        return true;
    }
}

document.getElementById("ver").addEventListener('click', () => {
    let dni = document.getElementById("dni");
    (dni.type == "text") ? dni.type = "password" : dni.type = "text";
});