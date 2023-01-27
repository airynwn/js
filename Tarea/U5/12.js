/*
! campo = document.getElementById("campo").value;
if (campo == null || campo.length == 0 || regex.test(campo)) {
    campo = "";
    return false;
}
*/

// function validarCampo(campo, regex) {
//     return (regex.test(campo.value));
// }

function validar(campo, regex) {
    // Borrar cuando esté fuera de focus si es inválido
    campo.addEventListener("focusout", () => {
        if (!regex.test(campo.value)) {
            campo.value = "";
        }
        return regex.test(campo.value);
    });
}

  let dni = document.getElementsByTagName("input")[0];
  validarCampo(dni, "Debes introducir un DNI", "Formato válido: 99.999.999-X");
  let nombre = document.getElementsByTagName("input")[1];
  validarCampo(nombre,
  "Introduzca al menos un nombre y un apellido. Máx: 2 nombres y 2 apellidos",
  "Los nombres y apellidos deben comenzar por mayúscula, tener al menos dos letras y estar separados por espacios.");
  let fecha = document.getElementsByTagName("input")[2];
  validarCampo(fnac, "Debes introducir una fecha de nacimiento.", "Formato válido: dd/mm/yyyy");
  let email = document.getElementsByTagName("input")[4];
  validarCampo(email, "Debes introducir un email.", "Formato válido: xxx@yyy.zzz");
  let web = document.getElementsByTagName("input")[5];
  validarCampo(web, "Debes introducir una página web.", "Formato válido: http://www.xxx.yyy");
  let pw1 = document.getElementsByTagName("input")[6];
  validarCampo(pw, "Debes introducir una contraseña.", "Debe contener entre 8 y 10 caracteres");
  let pw2 = document.getElementsByTagName("input")[7];
  validarCampo(pw2, "Debes introducir una contraseña.", "Debe contener entre 8 y 10 caracteres");
  let color = document.getElementById("color");
  

  // Crear cookies de los datos introducidos
  let enviar = document.getElementById("enviar");
  enviar.addEventListener("click", (e) => {
    e.preventDefault();
    if (pw1.value != pw2.value) {
      alert("Las contraseñas deben ser iguales.");
      pw2.value = "";
      return false;
    }
    let campos = [dni, nombre, fnac, email, web, pw, pw2, color];
    let valido = true;

    for (campo of campos) {
      if (!campo.checkValidity()) {
        valido = false;
      }
    }

    if (valido) {
      function crearCookie(campo, valor) {
        document.cookie = campo + "=" + valor;
      }

      // Crea una cookie nombredelcampo=valor por cada campo al darle al botón
      for (campo of campos) {
        crearCookie(campo.getAttribute("name"), campo.value);
      }
      alert("Datos guardados");
    } else {
      alert("No puedes guardar los datos hasta que todos los campos sean válidos");
    }

  });

  // Mostrar las cookies
    let ver = document.getElementById("ver");
    ver.addEventListener("click", () => {
        let datos = decodeURIComponent(document.cookie);
      if (datos.length > 0) {
        alert(datos);
        let aux = datos.substring(datos.indexOf("color"));
        let codcolor = aux.substring(aux.indexOf("#"), aux.length);
        document.body.style.backgroundColor = codcolor;
      }
    });
/**********************************/
/**********************************/
/**********************************/
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', validar);
});

document.forms[0].addEventListener('submit', passwords);

document.getElementById('ver').addEventListener('click', enseñarCookies);

function validar(event) {
    let input = event.currentTarget,
        nombre = input.name,
        valor = input.value,
        regex;
    switch (nombre) {
        case "nombre":
            regex =/^\w+\s\w+(\s(\w+(\s\w+)?)?)?$/;
            break;
        case "dni":
            regex = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/;
            break;
        case "fechaNacimiento":
            regex = /^\d{2}\/\d{2}\/\d{4}$/;
            break;
        case "email":
            regex = /^\w{3,}@\w{3,}\.\w{2,3}$/;
            break;
        case "pagweb":
            regex = /^(http|https):\/\/www\.\w{4,}\.\w{2,3}$/;
            break;
        case "contraseña":
        case "confirmarcontraseña":
            regex = /\d{8,10}/;
            break;
    }
    expresion(valor, regex, input);

}

function expresion(valor, regex, input) {
    if(!regex.test(valor)){
        alert("Por favor, cumpla el formato en el campo " + input.name.toUpperCase());
        input.value = "";
    }else{
        document.cookie = input.name+"="+input.value;
    }

}
