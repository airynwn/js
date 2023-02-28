<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="encuesta.js" defer></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Encuesta</h2>
    <form>
        Ichika
        <input type="radio" name="voto" value="0" onclick="getVoto(this.value)"></br>
        Nino
        <input type="radio" name="voto" value="1" onclick="getVoto(this.value)"></br>
        Miku
        <input type="radio" name="voto" value="2" onclick="getVoto(this.value)"></br>
        Yotsuba
        <input type="radio" name="voto" value="3" onclick="getVoto(this.value)"></br>
        Itsuki
        <input type="radio" name="voto" value="4" onclick="getVoto(this.value)"></br></br>
    </form>
    <h2>Resultado</h2>
    <div id="encuesta">
        <?php require "encuesta_voto.php";?>
    </div>
</body>
</html>