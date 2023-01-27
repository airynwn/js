document.addEventListener("keydown", colorea);
document.addEventListener("keyup", blanco);

function colorea(e) {
let key = e.keyCode;
console.log(key);
switch (key) {
    case 65: // A - amarillo
        document.body.style.backgroundColor = "gold";
        break;
    case 82: // R - rojo
        document.body.style.backgroundColor = "crimson";
        break;
    case 78: // N- negro
        document.body.style.backgroundColor = "black";
        break;
    case 86: 
        document.body.style.backgroundColor = "seagreen";
        break;
    }
}

function blanco() {
    document.body.style.backgroundColor = "white";
}