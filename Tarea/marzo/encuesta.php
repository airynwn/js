<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="qq.js" defer></script>
</head>
<body>
    <div id="encuesta">
        <h2>Encuesta</h2>
        <form>
            <input type="radio" name="voto" value="0" onclick="obtenerVoto(this.value)">
            <label for="ichika">Ichika</label><br>
            <input type="radio" name="voto" value="1" onclick="obtenerVoto(this.value)">
            <label for="nino">Nino</label><br>
            <input type="radio" name="voto" value="2" onclick="obtenerVoto(this.value)">
            <label for="miku">Miku</label><br>
            <input type="radio" name="voto" value="3" onclick="obtenerVoto(this.value)">
            <label for="yotsuba">Yotsuba</label><br>
            <input type="radio" name="voto" value="4" onclick="obtenerVoto(this.value)">
            <label for="itsuki">Itsuki</label>
        </form>
    </div>
    <div id="resultado">

    </div>
</body>
</html>