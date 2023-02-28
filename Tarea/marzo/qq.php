<?php

$voto = $_REQUEST["voto"];

// Sacar contenido del archivo
$archivo = "qqres.txt";
$contenido = file($archivo);

// Meterlo en un array y almacenarlo en variable por cada pj
$arr = explode("||", $contenido[0]);
$ichi = $arr[0];
$nino = $arr[1];
$miku = $arr[2];
$yots = $arr[3];
$itsu = $arr[4];

switch ($voto) {
    case 0:
        $ichi++;
        break;
    case 1:
        $nino++;
        break;
    case 2:
        $miku++;
        break;
    case 3:
        $yots++;
        break;
    case 4:
        $itsu++;
        break;
}

// Insertar votos en el archivo
$insertvoto = $ichi."||".$nino."||".$miku."||".$yots."||".$itsu;
$fp = fopen($archivo, "w"); // abrir en modo escritura
fputs($fp, $insertvoto);
fclose($fp);

// Calcular % de voto
$total = array_sum($arr);
$porcentajes = [];

foreach ($arr as $voto) {
    if ($total != 0) {
        $porcentajes[] = number_format(100 * $voto / $total, 2);
    } else {
        $porcentajes[] = 0;
    }
}

echo "<h2>Resultado</h2>";
for ($i = 0; $i < count($arr); $i++) {
    echo "<tr>";
    echo "<td>" . $arr[$i] . ":</td>";
    echo "<td><progress value='" . $porcentajes[$i] . "' ' max='100'>" . "</progress>" .  $porcentajes[$i] . "%</td>";
    echo "</tr>";
}
echo "</table>";