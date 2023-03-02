let div = document.getElementById("institutos");
let xhr = new XMLHttpRequest();
xhr.open("GET", "./webs.json", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);
        let texto = "";
        for (let i in json) {
            texto += "</p>" + json[i].display + ": <a href='" + json[i].url + "'>" + json[i].url + "</a></p>";
        }
        let p = document.createElement("p");
        p.innerHTML = texto;
        div.appendChild(p);
    }
}