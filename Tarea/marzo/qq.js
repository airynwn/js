function obtenerVoto(int) {
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }
    }
    
    xmlhttp.open("GET", "qq.php?voto=" + int, true);
    xmlhttp.send();
}