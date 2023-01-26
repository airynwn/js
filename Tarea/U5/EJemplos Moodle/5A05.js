/**
 * Rafael Figueroa Becerra
 */

/**
 * Script que cambia la imagen por otra mientras se pulsa algun boton del ratón
 */



var img = document.getElementById("imagen");

img.addEventListener('mousedown', () =>{
        img.setAttribute("src", "perro.jpg");
});

img.addEventListener('mouseup', () =>{
    img.setAttribute("src", "gato.jpg");
});