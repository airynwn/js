function getVoto(int) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("encuesta").innerHTML = this.responseText;
        }
    }

    /*
        ! POST
        let data = "search_string=" + search_term;
        xhr.open("POST", "introductory-demo.php", true); 
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
        xhr.send(data); 
    */
    xmlhttp.open("GET", "encuesta_voto.php?voto=" + int, true);
    xmlhttp.send();
}