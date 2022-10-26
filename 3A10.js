var expresion = document.getElementById("expresion"); 

function ingresar(insertar){
    expresion.value += insertar;
}


function sqr(){
    expresion.value = Math.sqrt(expresion.value);
}

function log(){
    expresion.value = Math.log(expresion.value);
}

function pi(){
    expresion.value += Math.PI;
}

function pow3(){
    expresion.value = expresion.value ** 3;
}

function sin(){
    expresion.value = Math.sin(expresion.value);
}

function cos(){
    expresion.value = Math.cos(expresion.value);
}

function tan(){
    expresion.value = Math.tan(expresion.value);
}

function pow2(){
    expresion.value = expresion.value ** 2;
}



function borrar(){
    expresion.value = "";
}

function del(){
    expresion.value = expresion.value.substring(0, expresion.value.length -1);
}

function evaluar(){
    expresion.value = eval(expresion.value);
}