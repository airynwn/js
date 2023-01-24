function validarCampo(campo, errorVacio, errorPatron) {
    let mensaje = document.getElementById("msg");
    // Interrumpir validación
    campo.addEventListener("input", () => {
      mensaje.innerHTML = "";
      campo.setCustomValidity("");
      campo.checkValidity();
    });

    // Si no es válido:
    campo.addEventListener("invalid", () => {
      /*
        Caso raro: En Firefox los mensajes de customvalidity sólo aparecen
        cuando se focusea el campo. El de valuemissing sólo sale cuando se ha
        escrito y borrado anteriormente en el campo; de primeras sale el mensaje predeterminado.
        En Opera directamente no sale ninguno, sólo los predeterminados.
        Antes funcionaba normal
      */

      // Si está vacío
      if (campo.validity.valueMissing) {
        campo.setCustomValidity(errorVacio);
        mensaje.innerHTML = errorVacio;
      }
      
      // Si no se corresponde con el patrón
      if (campo.validity.patternMismatch) {
        campo.setCustomValidity(errorPatron);
        mensaje.innerHTML = errorPatron;

      // Borrar cuando esté fuera de focus si es inválido
      campo.addEventListener("focusout", () => {
        if (campo.validity.valueMissing || campo.validity.patternMismatch) {
          campo.value = "";
        }
      });
      }
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
  let email = document.getElementsByTagName("input")[3];
  validarCampo(email, "Debes introducir un email.", "Formato válido: xxx@yyy.zzz");
  // ! No funciona la validación de web??
  let web = document.getElementsByTagName("input")[4];
  validarCampo(web, "Debes introducir una página web.", "Formato válido: http://www.xxx.yyy");
  let pw1 = document.getElementsByTagName("input")[5];
  validarCampo(pw, "Debes introducir una contraseña.", "Debe contener entre 8 y 10 caracteres");
  let pw2 = document.getElementsByTagName("input")[6];
  validarCampo(pw2, "Debes introducir una contraseña.", "Debe contener entre 8 y 10 caracteres");
  
  // Crear cookies de los datos introducidos
  let enviar = document.getElementById("enviar");
  enviar.addEventListener("click", (e) => {
    e.preventDefault();
    let campos = [dni, nombre, fnac, email, web, pw, pw2];
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
      }
    });