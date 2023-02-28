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
$denominador = (int)$ichi + (int)$nino + (int)$miku + (int)$yots + (int)$itsu;
$tantoIchi = 100 * round($ichi / $denominador, 2);
$tantoNino = 100 * round($nino / $denominador, 2);
$tantoMiku = 100 * round($miku / $denominador, 2);
$tantoYots = 100 * round($yots / $denominador, 2);
$tantoItsu = 100 * round($itsu / $denominador, 2);

?>

<h2>Resultado</h2>
<table>
    <tr>
        <td>Ichika:</td>
        <td><?php echo $tantoIchi  ?>%</td>
    </tr>
    <tr>
        <td>Nino:</td>
        <td><?php echo $tantoNino ?>%</td>
    </tr>
    <tr>
        <td>Miku:</td>
        <td><?php echo $tantoMiku ?>%</td>
    </tr>
    <tr>
        <td>Yotsuba:</td>
        <td><?php echo $tantoYots ?>%</td>
    </tr>
    <tr>
        <td>Itsuki:</td>
        <td><?php echo $tantoItsu ?>%</td>
    </tr>
</table>