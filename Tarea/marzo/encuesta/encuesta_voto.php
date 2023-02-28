<?php
$fichero = "resultados.txt";
// Nombre de votos
$arr = ["Ichika", "Nino", "Miku", "Yotsuba", "Itsuki"];

$contenido = file($fichero);
$votos = explode("||", $contenido[0]);

// Colocar voto en el archivo de resultados
if (isset($_REQUEST['voto'])) {
    $voto = $_REQUEST['voto'];
    if ($voto >= 0 && $voto < count($arr)) {
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
for ($i = 0; $i < count($arr); $i++) {
    echo "<label for='" . $arr[$i] . "'>" . $arr[$i] . " - " . $votos[$i] . " votos</label>";
    echo "<div class='barra'>";
    echo "<div id='" . $ids[$i] . "' style='max-width:" . $porcentajes[$i] . "%'>" . $porcentajes[$i] . "%</div>";
    echo "</div>";
    echo "<br>";
}
