<?php
$a[] = 'Alava';
$a[] = 'Albacete';
$a[] = 'Alicante';
$a[] = 'Almería';
$a[] = 'Asturias';
$a[] = 'Avila';
$a[] = 'Badajoz';
$a[] = 'Barcelona';
$a[] = 'Burgos';
$a[] = 'Cáceres';
$a[] = 'Cádiz';
$a[] = 'Cantabria';
$a[] = 'Castellón';
$a[] = 'Ciudad Real';
$a[] = 'Córdoba';
$a[] = 'La Coruña';
$a[] = 'Cuenca';
$a[] = 'Gerona';
$a[] = 'Granada';
$a[] = 'Guadalajara';
$a[] = 'Guipúzcoa';
$a[] = 'Huelva';
$a[] = 'Huesca';
$a[] = 'Islas Baleares';
$a[] = 'Jaén';
$a[] = 'León';
$a[] = 'Lérida';
$a[] = 'Lugo';
$a[] = 'Madrid';
$a[] = 'Málaga';
$a[] = 'Murcia';
$a[] = 'Navarra';
$a[] = 'Orense';
$a[] = 'Palencia';
$a[] = 'Las Palmas';
$a[] = 'Pontevedra';
$a[] = 'La Rioja';
$a[] = 'Salamanca';
$a[] = 'Segovia';
$a[] = 'Sevilla';
$a[] = 'Soria';
$a[] = 'Tarragona';
$a[] = 'Santa Cruz de Tenerife';
$a[] = 'Teruel';
$a[] = 'Toledo';
$a[] = 'Valencia';
$a[] = 'Valladolid';
$a[] = 'Vizcaya';
$a[] = 'Zamora';
$a[] = 'Zaragoza';

// Recoge el parámetro de la URL y crea la sugerencia
$p = $_REQUEST["p"];

$sugerencia = "";

// Si el parámetro no está vacío, comprueba que coincida con alguna ciudad
if ($p !== "") {
  $p = strtolower($p);
  $len = strlen($p);
  foreach ($a as $ciudad) {
    // Busca si el parámetro recogido coincide con el principio de alguna ciudad
    if (stristr($p, substr($ciudad, 0, $len))) {
      if ($sugerencia === "") {
        // Construye las sugerencias. Si está vacía, pone una sola
        $sugerencia = $ciudad;
      } else {
        // Si hay más sugerencias, le añade una coma
        $sugerencia .= ", $ciudad";
      }
    }
  }
}

// Muestra si el parámetro recogido coincide o no con ninguna ciudad
echo $sugerencia === "" ? "No se ha encontrado ninguna ciudad" : $sugerencia;
