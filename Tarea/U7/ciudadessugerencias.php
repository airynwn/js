<?php
// Array with names
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

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach ($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
