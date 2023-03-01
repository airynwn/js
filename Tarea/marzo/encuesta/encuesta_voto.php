<?php
$fichero = "resultados.txt";
// Nombre de votos
// $arr = ["Ichika", "Nino", "Miku", "Yotsuba", "Itsuki"];
// JSON (Sacar el index importante)
$arr = json_decode(file_get_contents("encuesta.json"), true);
$pjs = $arr['personajes'];

$contenido = file($fichero);
$votos = explode("||", $contenido[0]);

// Colocar voto en el archivo de resultados
if (isset($_REQUEST['voto'])) {
    $voto = $_REQUEST['voto'];
    if ($voto >= 0 && $voto < count($pjs)) {
        $votos[$voto] += 1;
        $insertvoto = implode("||", $votos);
        file_put_contents($fichero, $insertvoto);
    }
}

// Sacar %
$total = array_sum($votos);
$porcentajes = array();
foreach ($votos as $voto) {
    if ($total != 0) {
        $porcentajes[] = number_format(100 * $voto / $total, 2);
    } else {
        $porcentajes[] = 0;
    }
}

// Ids de estilo de las barras de colores
$ids = ["ichika", "nino", "miku", "yotsuba", "itsuki"];

// Genera HTML con barras: label Nombre - x votos, barra coloreada que aumenta según %
for ($i = 0; $i < count($pjs); $i++) {
    echo "<label for='" . $pjs[$i] . "'>" . $pjs[$i] . " - " . $votos[$i] . " votos</label>";
    echo "<div class='barra'>";
    echo "<div id='" . $ids[$i] . "' style='max-width:" . $porcentajes[$i] . "%'>" . $porcentajes[$i] . "%</div>";
    echo "</div>";
    echo "<br>";
}
