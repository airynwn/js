/**
 * Rafael Figueroa Becerra
 */

/**
 * Script cambiar el fondo de color segun acciones
 */

/**
 * Cambia el color de fondo de la página
 * @param {string} color 
 */

function cambiaColor(color){
    document.body.style.backgroundColor = color;
}

document.addEventListener('mousedown', () => cambiaColor("#FFFF00"));
document.addEventListener('mousemove',() =>cambiaColor("white"));
document.addEventListener('keydown',() =>cambiaColor("#CCE6FF"));
