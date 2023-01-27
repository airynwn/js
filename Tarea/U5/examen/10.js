let cookie = decodeURIComponent(document.cookie);

// Si no existe la cookie, la crea. Si existe, retoma el progreso.
if (cookie.length == 0) {
  cookie = "Café Solo=0; Café con leche=0; Café descafeinado=0; Café solo con hielo=0";
  document.cookie = "Café Solo=0";
  document.cookie = "Café con leche=0";
  document.cookie = "Café descafeinado=0";
  document.cookie = "Café solo con hielo=0";
} else {
  subirProgreso();
}

function subirProgreso() {
  let solo = document.getElementById("solo-barra");
  let leche = document.getElementById("leche-barra");
  let descafeinado = document.getElementById("descafeinado-barra");
  let hielo = document.getElementById("hielo-barra");
  
  let barras = [solo, leche, descafeinado, hielo];

  // Número de votos para cada tipo de café
  for (cafe of decodeURIComponent(document.cookie).split("; ")) {
    switch (cafe.substring(0, cafe.indexOf("="))) {
      case "Café Solo":
        var votossolo = parseInt(cafe.substring(cafe.indexOf("=") + 1, cafe.length));
        break;
        case "Café con leche":
        var votosleche = parseInt(
          cafe.substring(cafe.indexOf("=") + 1, cafe.length)
        );
        break;
      case "Café descafeinado":
        var votosdescafeinado = parseInt(cafe.substring(cafe.indexOf("=") + 1, cafe.length));
        break;
      case "Café solo con hielo":
          var votoshielo = parseInt(cafe.substring(cafe.indexOf("=") + 1, cafe.length));
          break;
        }
    }

  // Número total (100%) de votos
  let arrVotos = [votossolo, votosleche, votosdescafeinado, votoshielo];
  let votosNumericos = arrVotos.slice();
  let total = 0;
  arrVotos.forEach((i) => {
    total += i;
});

// Calcula el porcentaje de votos para cada café
// y lo colorea aumentando el tamaño de la barra correspondiente
  for (i in arrVotos) {
    arrVotos[i] = (arrVotos[i] * 100) / total;
    barras[i].style.maxWidth = arrVotos[i] + "%";
    barras[i].innerHTML = Math.round(arrVotos[i]) + "% (" + votosNumericos[i] + " votos)";
  }
}

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", (e) => {
  // Saca la cookie y el café escogido, evitando que se envíe el formulario
  e.preventDefault();
  let votos = decodeURIComponent(document.cookie);
  let cafe = document.querySelector('input[type=radio][name="cafe"]:checked').value;
  
  // En la lista de votos, sacar el perteneciente al tipo de café escogido
  // y su número y sumarle 1
  let num;
  for (i of votos.split("; ")) {
      if (cafe == i.substring(0, i.indexOf("="))) {
          num = parseInt(i.substring(i.indexOf("=") + 1, i.length));
        }
  }
  
  // Actualiza el voto para el café en la cookie
  let numvoto = cafe + "=" + (num + 1);
  document.cookie = numvoto;
  subirProgreso();
});

let correo = document.getElementById("correo");
correo.addEventListener("click", () => {
    // Esto abre una ventana del correo para mandar la información
    location.href = "mailto:rafael.figueroa@iesdonana.com?subject=Datos de la encuesta de café&body=" + document.cookie;
    // Versión con API
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'rafael.figueroa@iesdonana.org',
        From : "you@isp.com",
        Subject : "Datos de la encuesta",
        Body : document.cookie
    }).then(
      message => alert(message)
    );
});