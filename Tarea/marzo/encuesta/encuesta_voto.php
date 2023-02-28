<?php
$fichero = "resultados.txt";
$arr = ["Ichika", "Nino", "Miku", "Yotsuba", "Itsuki"];

$contenido = file($fichero);
$votos = explode("||", $contenido[0]);

// Actualizar el array de votos si hay un voto nuevo
if (isset($_REQUEST['voto'])) {
    $voto = $_REQUEST['voto'];
    // Asegurarse de que el voto es válido
    if ($voto >= 0 && $voto < count($arr)) {
        $votos[$voto] += 1;
        // Escribir el array de votos actualizado en el fichero
        $insertvoto = implode("||", $votos);
        file_put_contents($fichero, $insertvoto);
    }
}

// Calcular el total de votos y los porcentajes de cada equipo
$total = array_sum($votos);
$porcentajes = array();
foreach ($votos as $voto) {
    if ($total != 0) {
        $porcentajes[] = number_format(100 * $voto / $total, 2);
    } else {
        $porcentajes[] = 0;
    }
}

$ids = ["ichika", "nino", "miku", "yotsuba", "itsuki"];
for ($i = 0; $i < count($arr); $i++) {
    echo "<label for='" . $arr[$i] . "'>" . $arr[$i] . " - " . $votos[$i] . " votos</label>";
    echo "<div class='barra'>";
    echo "<div id='" . $ids[$i] . "'>" . $porcentajes[$i] . "%</div>";
    echo "</div>";
    echo "<br>";
    // echo "<td>" . $arr[$i] . ":</td>";
    // echo "<td><progress value='" . $porcentajes[$i] . "' ' max='100'>" . "</progress>" .  $porcentajes[$i] . "%</td>";
    // echo "</tr>";
}
?>