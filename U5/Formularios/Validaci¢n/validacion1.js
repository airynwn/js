window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    var nombre=document.getElementById("nombre")
    // comprueba si la validación es correcta
    if(!nombre.checkValidity()){
        // Si nombre no tiene nada escrito escribimos el siguiente mensaje 
        if(nombre.validity.valueMissing){
            error(nombre,"El campo nombre no puede estar vacio (requerido)")
        }
        // Si nombre no concuerda con su patron le indicamos como debe realizarlo 
        if(nombre.validity.patternMismatch){
            error(nombre,"El campo nombre no coincide con el patrón (de 2 a 10 caracteres no numerico)")
        }
        return false
    }
    return true
}

function validaEdad(){
    var edad=document.getElementById("edad")
    if(!edad.checkValidity()){
        // Le indicamos que la edad debe ser inferior a 100 
        if(edad.validity.rangeOverflow){
            error(edad,"Debe ser menor que 100")
        }
        // Le indicamos que la edad debe ser superior a 18
        if(edad.validity.rangeUnderflow){
            error(edad,"Debe ser mayor que 18")
        }
        return false
    }
    return true
}

function validaTelefono() {
    var tlf = document.getElementById("telefono");
    if (!tlf.checkValidity()) {
        if (tlf.validity.valueMissing) {
            error(tlf, "Debe introducir un teléfono")
        }
        if (tlf.validity.patternMismatch) {
            error(tlf, "El telefono debe tener 9 numeros");
        } 
        return false;
    }
    return true;
}


//Creamos una función que nos genere el mensaje de error, donde este el error le ponemos el foco y un estilo.
function error(err,msg){
    document.getElementById("mensajeError").innerHTML=msg
    err.className="error"
    err.focus()
}

//Creamos una función que nos elimine las clase de los errores que se ha podido generar
function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}


function validar(e) {
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true
    } else {
        e.preventDefault();
        return false;
    }
}















