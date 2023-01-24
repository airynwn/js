let cookie = decodeURIComponent(document.cookie);

// Si no existe la cookie, la crea. Si existe, retoma el progreso.
if (cookie.length == 0) {
  cookie = "iOS=0; Android=0; Windows Phone=0; Otro=0";
  document.cookie = "iOS=0";
  document.cookie = "Android=0";
  document.cookie = "Windows Phone=0";
  document.cookie = "Otro=0";
} else {
  subirProgreso();
}

function subirProgreso() {
  let ios = document.getElementById("ios-barra");
  let android = document.getElementById("android-barra");
  let wp = document.getElementById("wp-barra");
  let otro = document.getElementById("otro-barra");

  let barras = [ios, android, wp, otro];

  // Número de votos para cada OS
  for (os of decodeURIComponent(document.cookie).split("; ")) {
    switch (os.substring(0, os.indexOf("="))) {
      case "iOS":
        var votosios = parseInt(os.substring(os.indexOf("=") + 1, os.length));
        break;
      case "Android":
        var votosandroid = parseInt(
          os.substring(os.indexOf("=") + 1, os.length)
        );
        break;
      case "Windows Phone":
        var votoswp = parseInt(os.substring(os.indexOf("=") + 1, os.length));
        break;
      case "Otro":
        var votosotro = parseInt(os.substring(os.indexOf("=") + 1, os.length));
        break;
    }
  }

  // Número total (100%) de votos
  let arrVotos = [votosios, votosandroid, votoswp, votosotro];
  let total = 0;
  arrVotos.forEach((i) => {
    total += i;
  });

  // Calcula el porcentaje de votos para cada OS
  // y lo colorea aumentando el tamaño de la barra correspondiente
  for (i in arrVotos) {
    arrVotos[i] = (arrVotos[i] * 100) / total;
    barras[i].style.maxWidth = arrVotos[i] + "%";
    barras[i].innerHTML = Math.round(arrVotos[i]) + "%";
  }
}

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", (e) => {
  // Saca la cookie y el nombre del OS escogido, evitando que se envíe el formulario
  e.preventDefault();
  let votos = decodeURIComponent(document.cookie);
  let os = document.querySelector('input[type=radio][name="os"]:checked').value;

  // En la lista de votos, sacar el perteneciente al OS escogido
  // y su número y sumarle 1
  let num;
  for (i of votos.split("; ")) {
    if (os == i.substring(0, i.indexOf("="))) {
      num = parseInt(i.substring(i.indexOf("=") + 1, i.length));
    }
  }

  // Actualiza el voto para el OS en la cookie
  let numvoto = os + "=" + (num + 1);
  document.cookie = numvoto;
  subirProgreso();
});
