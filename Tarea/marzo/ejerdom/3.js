for (let i of document.getElementsByTagName("h2")) {
    i.addEventListener("click", recorrerAdelante);
}

function recorrerAdelante(e) {
    let res = "";
    let h2 = e.target;
    res += "Has elegido " + h2.textContent;
    let padre = h2.parentElement;
    res += ", situada en el " + padre.id + ".<br>";

    let ul = h2.nextElementSibling;
    res += "El número de provincias es " + ul.children.length +  ": ";

    let hijo = ul.firstChild;
    while (hijo != null) {
        res += " " + hijo.textContent;
        hijo = hijo.nextElementSibling;
    }

    document.getElementById("texto").innerHTML = res;
    
}