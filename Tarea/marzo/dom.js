let res = document.getElementById("resultado");

function generaListaRecursiva(nodo, lista) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(nodo.tagName));

    if (nodo.children.length > 0) {
        const ul = document.createElement("ul");

        for (c of nodo.children) {
            generaListaRecursiva(c, ul);
        }

        li.appendChild(ul);
    }

    lista.appendChild(li);
}

function generaLista() {
    const ul = document.createElement("ul");
    res.appendChild(ul);
    generaListaRecursiva(document.documentElement, ul);
}

window.onload = generaLista;