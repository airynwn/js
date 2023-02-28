function getVoto(int) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("encuesta").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "encuesta_voto.php?voto=" + int, true);
    xmlhttp.send();
}