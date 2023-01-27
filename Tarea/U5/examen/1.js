let imagen = document.getElementById("imagen");
window.addEventListener("mousemove", (e) => {
        if (e.buttons === 1) {
            imagen.style.position = "absolute";
            imagen.style.top = e.clientY + "px";
            imagen.style.left = e.clientX + "px";
        }
    });