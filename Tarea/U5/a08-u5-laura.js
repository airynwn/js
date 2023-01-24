// Sobre mí -> Google
let sobremi = document.getElementById("google");
sobremi.addEventListener("click", () => (location.href = "http://www.google.com"));

// 10. Marcar como día preferente el día marcado disponible.
// Si hay varios días marcados disponibles, se marca preferente el último de estos.
let dias = document.querySelectorAll('input[type=checkbox][name="dias"]');
dias.forEach((dia) =>
  dia.addEventListener("change", () => {
    // Al marcar un día disponible, poner por defecto ese día como selected en preferentes
    // Comprobar que el día haya sido marcado y no desmarcado en el change
    if (dia.checked) {
      document.querySelector('select[name="pref"]').value = dia.value;
    }
  })
);

// 11. cambiar coloro de fondo según input radio seleccionado
let colores = document.querySelectorAll('input[type=radio][name="color"]');
colores.forEach((color) =>
  color.addEventListener("change", () => (
    document.body.style.background = color.value
)));

// 9. Enviar el cuestionario al profesor de la asignatura seleccionada
// ! SÓLO FUNCIONA EN FIREFOX por alguna extraña razón
let enviar = document.getElementById("enviar");
enviar.addEventListener("click", () => {
  location.href = "mailto:" + document.querySelector("select").value + "@example.com";
});
