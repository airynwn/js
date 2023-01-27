document.getElementById("ver").addEventListener('click', () => {
    let dni = document.getElementById("dni");
    (dni.type == "text") ? dni.type = "password" : dni.type = "text";
});