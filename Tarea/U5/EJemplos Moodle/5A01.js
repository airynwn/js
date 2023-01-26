/**
 * "Rafael Figueroa Becerra"
 */

/**
 * Script que cuando el usuario pulse un botón del ratón dentro del DOM
 * añadirá un parrafo diciendo cual ha pulsado.
 */

document.addEventListener('mousedown', e =>{
    let accion = "";
    switch(e.button){
        case 0:
            accion = "Has pulsado el boton izquierdo del ratón.";
            break;
        case 1:
            accion = "Has pulsado la rueda central del ratón.";
            break;
        case 2:
            accion = "Has pulsado el botón derecho del ratón.";
            break;
    }
    document.getElementById("parrafos").innerHTML += `<p>${accion}</p>`;
});