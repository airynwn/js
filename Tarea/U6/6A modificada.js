/**
 * 
 */


/************************************
*
* Funciones Generales
* 
************************************/


/**
 * Crea el contenedor de la actividad si no existe
 * Si existe lo borra para generar uno nuevo 
 */
function existeActividad(){
    // Comprueba si existe un elemento con id actividad
    if (document.getElementById("actividad")){
        // Si es así, lo borra
        content.removeChild(document.getElementById("actividad"));
    }
    
    // Crea el contenedor de la actividad
    var divac = document.createElement("div");
    // Le asigna el id actividad al contenedor
    divac.setAttribute("id", "actividad");
    // Mete divac dentro de content
    content.appendChild(divac);
   /*
    Esta función comprueba si existe la actividad dentro del contenido.
    En caso de que esta exista, la borra para crearla desde 0.
   */
}

 /**
 * Recibe una cadena y devuelve la misma cadena con la primera letra en Mayúscula
 * @param {string} s 
 * @returns {string}
 */
function capitalize(s){
    /*
        Toma el primer carácter del argumento pasado a la función,
        lo pasa a mayúscula y le añade el resto de la cadena
        para capitalizarla
    */
    return s.charAt(0).toLocaleUpperCase() + s.slice(1);
}


/************************************
*
* Actividad 6
* 
************************************/
function generaNueve(){   
    
    const ALUMNOS = [];
    const NUMALUM = 5;

    /************************************
     *
     * FUNCIONES LOCALES A LA ACTIVIDAD
     * 
     ************************************/
    /**
     * Genera la tabla de alumnos
     * @param {array} cabecera 
     * @param {array} cuerpo 
     */
    function crearTablaAlum(cabecera, cuerpo){
        // Busca un elemento con id tabla. Si existe, lo borra
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla"))
        }

        // Crea una tabla y le da el atributo id tabla
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla");
        
        // Genera la cabecera de la tabla:
        // Crea los elementos thead y tr de la tabla
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        
        // Por cada celda de la cabecera que reciba la función,
        // crea un th con el nodo de texto pasado capitalizado y lo añade a la cabecera de la tabla
        for (e of cabecera){
            var th = document.createElement("th");
            var nodoTexto = document.createTextNode(capitalize(e));
            th.appendChild(nodoTexto);
            tr.appendChild(th);
        }
        // Tras construir la cabecera, añade la tabla la fila (tr y thead)
        thead.appendChild(tr);
        tabla.appendChild(thead);
    
        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody");

        /*
            Por cada fila que contenga el cuerpo que se le pasa a la función,
            se crea un elemento fila (tr). Dentro de cada fila, se crean
            las celdas (elementos td) y el nodo de texto que va dentro de estas para introducir
            el texto en las celdas y, después, las celdas en las filas.
            Finalmente, añade la fila construida al cuerpo de la tabla.
        */
        for (fila of cuerpo){
            tr = document.createElement("tr");
            for (celda of fila){
                var td = document.createElement("td");
                nodoTexto = document.createTextNode(celda);
                td.appendChild(nodoTexto);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    
        // Le añade el cuerpo construido a la tabla
        tabla.appendChild(tbody);
    
        // Mete la tabla dentro de la actividad, que es el contenedor construido en a función anterior
        actividad.appendChild(tabla);
    
        /*
            Esta función pretende construir una tabla poco a poco,
            empezando por la cabecera y terminando por las celdas.
            Una vez construida la cabecera y el cuerpo de la tabla, 
            añade ambos como hijos de la tabla e introduce la tabla
            dentro del contenedor actividad.
        */
    }


    /**
     * Comprueba que ningun campo esté vacio
     * 
     * @param  {...any} re
     * @returns {boolean} true si hay alguno vacío
     */
    function comprobarRegistros(...re){
        // Empieza en false la variable interruptor
        let interruptor = false;
        /*
            Por cada registro que se pase por parámetro, comprueba
            que todos tengan algún valor. Si hay algún registro vacío,
            interruptor pasa a ser true.
        */
        re.forEach(e =>{
            if(e === ""){
                interruptor = true;
            }
        }); 
        // Se devuelve el valor del interruptor
        return interruptor;
    }

    /**
     * Almacena a los alumnos y sus notas para luego crear la tabla
     */
    function guardarAlumno(){
        // Busca los elementos con los id que se pasan y saca el valor de estos
       var nombre = document.getElementById("alumno").value;
       var modulo1 = document.getElementById("modulo1").value;
       var modulo2 = document.getElementById("modulo2").value;
       var modulo3 = document.getElementById("modulo3").value;

       //Si algun campo está vacío rompe la secuencia de la función
       /*
        Usando la función anterior, se comprueba que el valor de 
        los elementos que se sacaron anteriormente no esté vacío.
        Si alguno de ellos está vacío, muestra un aviso y se sale de la función.
        */
       if (comprobarRegistros(nombre, modulo1, modulo2, modulo3)){
           alert("Ningún campo puede estar vacío")
           return;
       }

       // comprueba si los campos esán en el tipo adecuado
       /*
        Comprueba que el valor del nombre no sea un número
        y que el valor de los módulos sean números
       */
       if (isNaN(nombre) && !isNaN(modulo1, modulo2, modulo3)){
            // Comprueba que los valores de los módulos estén comprendidos entre 0 y 10
            if ([modulo1, modulo2, modulo3].every(e => e >= 0 && e <= 10)){
                /*
                    Si se cumplen todas las condiciones hasta ahora, introduce los datos
                    nombre y los módulos en la constante ALUMNOS
                */
                ALUMNOS.push([nombre,modulo1, modulo2, modulo3]);
                // Después, cambia el valor de los elementos alumno y los módulos y hace que sean vacíos
                document.getElementById("alumno").value = "";
                document.getElementById("modulo1").value = "";
                document.getElementById("modulo2").value = "";
                document.getElementById("modulo3").value = "";

                //  Cuando llega a los 5 alumnos introducidos, muestra un aviso y no permite guardar más
                if (ALUMNOS.length >= NUMALUM ){
                    alert("Todos los alumnos estan introducidos");
                    guardar.disabled = true;
                    generarTabla.disabled = false;
                } 

            } else{
                alert("Error: Las notas deben estar comprendidas entre 0 y 10"); 
            }

       } else{
            if(!isNaN(nombre)){
                alert(`Dato incorreco: ${nombre} no es un nombre`);
            }
            if (isNaN(modulo1, modulo2, modulo3)){
                alert("Dato incorrecto: combruebe que en los modulos las notas sean números");
            }
       }


    }


    /************************************
     *
     * CREA EL CONTENIDO DE LA ACTIVIDAD
     * 
     ************************************/

    // Combrobamos que no existe el contenedor de la actividad si existe lo borramos 
    existeActividad();

    // Consigue el elemento con id actividad
    var actividad = document.getElementById("actividad");



    //Crea el enunciado como un elemento blockquote y un nodo de texto
    // para añadirle el nodo al blockquote e introducirlo en la actividad
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("9. Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos. Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.");
    enunciado.appendChild(nodoTexto);
    actividad.appendChild(enunciado);
    
    // Crea la constante FORMULARIO
    const FORMULARIO = ["alumno", "modulo 1", "modulo 2", "modulo 3"];
   
    // Por cada elemento dentro del array FORMULARIO, crea sus elementos label e input correspondientes
    // dentro de un párrafo que añadirá dentro de actividad
    FORMULARIO.forEach(e =>{
        //creacion del label
        var p = document.createElement("p");
        var la = document.createElement("label");
        // Le da el atributo for al label para que sea el mismo para el que está creando el formulario borrando los espcios
        la.setAttribute("for", e.replace(" ", ""));
        // Añade un nodo de texto dentro del label que será el nombre del elemento capitalizado
        nodoTexto = document.createTextNode(`${capitalize(e)}: `);
        la.appendChild(nodoTexto);
        p.appendChild(la);
        
        
        //creacion de los inputs
        var inp = document.createElement("input");
        // Le asigna text como type y el nombre sin espacios como name e id
        inp.setAttribute("type", "text");
        inp.setAttribute("name", e.replace(" ", ""));
        inp.setAttribute("id", e.replace(" ", ""));
        p.appendChild(inp);
        
        //Metemos todo en el div
        actividad.appendChild(p);
    });

    //Generamos los botones para enviar
    // Crea un elemento input que será un botón de guardar con atributos type submit, id guardar y valor Guardar
    var guardar = document.createElement("input");
    guardar.setAttribute("type", "submit");
    guardar.setAttribute("id", "guardar");
    guardar.setAttribute("value", "Guardar");
    // Mete el botón dentro de actividad
    actividad.appendChild(guardar);

    /*
        Crea un elemento input que será un botón para generar la tabla con atributos type submit,
        id generarTabla y valor Generar Tabla. Estará desactivado al tener el atributo disabled.
        Este botón lo introduce dentro de actividad.
    */
    var generarTabla = document.createElement("input");
    generarTabla.setAttribute("type", "submit");
    generarTabla.setAttribute("id", "generarTabla");
    generarTabla.setAttribute("value", "Generar Tabla");
    generarTabla.setAttribute("disabled", "");
    actividad.appendChild(generarTabla);

    // listeners
    /*
        Le asigna el evento click al elemento con id guardar, que es el botón de enviar
        Al hacer click en este botón, se ejecutará la función guardarAlumno()
    */
    document.getElementById("guardar").addEventListener('click', guardarAlumno);

    /*
        Le asigna el evento click al elemento con id generarTabla, que es el botón para crear la tabla
        Al hacer click en este botón, se ejecutará la función crearTablaAlum() con los parámetros
        constantes FORMULARIO y ALUMNOS
    */
    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaAlum(FORMULARIO, ALUMNOS)
            });



    
}


/************************************
*
* Actividad 10 unidad 4
* 
************************************/
function generaTrece(){
    
    // Comprueba que no existe el contenedor de la actividad. EN caso de que exista, la borra.
    existeActividad();
    // Consigue el elemento con id actividad
    var actividad = document.getElementById("actividad");



    //Crea el enunciado de la misma forma que en la actividad anterior
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("13. Utilice el código empleado para la generación de las instancias del objeto Vehículo, y modifíquelo para que los valores de cada una de sus propiedades se impriman en una tabla HTML. Utilice la generación de código HTML desde código JavaScript. Cada instancia del objeto debeocupar una línea y el valor de cadapropiedad debe ocupar una celda de dicha línea. El resultado debe ser similar a:");
    enunciado.appendChild(nodoTexto);
    actividad.appendChild(enunciado);
    
    var generarTabla = document.createElement("input");
    generarTabla.setAttribute("type", "submit");
    generarTabla.setAttribute("id", "generarTabla");
    generarTabla.setAttribute("value", "Generar Tabla");
    actividad.appendChild(generarTabla);

    /*************************
     * Funciones locales
     * 
     *************************/

     /**
      * Genera una tabla con los vehiculos
      * @param  {...any} vehiculos 
      */
    function crearTablaCoche(...vehiculos){
        debugger;
        
        // Busca el elemento de id tabla y lo borra del contenedor de la actividad
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla"))
        }
        // Crea el elemento tabla desde 0 y le asigna el id tabla
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla");
        
        // Genera los elementos thead y tr para la cabecera de la tabla
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        const CABECERA = ["Marca", "Modelo", "Color", "Año de fabricación"];
        
      
        // Por cada elemento del array CABECERA, crea un elemento th con el nodo de texto del nombre de dicho elemento
        // y lo añade a la cabecera. Tras terminar de construir la cabecera, la añade a la tabla.
        for (e of CABECERA){
            var th = document.createElement("th");
            var nodoTexto = document.createTextNode(e);
            th.appendChild(nodoTexto);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);
    
        // Genera el elemento cuerpo de la tabla
        var tbody = document.createElement("tbody");
    
        /*
            A partir del parámetro vehículos, recorre la longitud de este.
            Por cada iteración crea una fila y busca las claves cuyo tipo no sea función
            para crear un elemento celda (td) y darle como nodo de texto dicha clave.
            Tras terminar de construir la celda, la añade a la fila.
        */
         for (let i = 0; i < vehiculos.length; i++){
            var tr = document.createElement("tr");
            
            for (const key in vehiculos[i]) {
                if (typeof vehiculos[i][key] != "function") {
                    var td = document.createElement("td");
                    nodoTexto = document.createTextNode(`${vehiculos[i][key]}`);
                    td.appendChild(nodoTexto);
                    tr.appendChild(td);
                }
                
            }
            tbody.appendChild(tr);
        }

        // Tras construir las filas y añadirlas al cuerpo de la tabla, introduce este dentro de la tabla
        // y la tabla dentro del contenedor de la actividad.
        tabla.appendChild(tbody);
        actividad.appendChild(tabla);

        /*
            Esta función construye, al igual que la de alumnos, construye poco a poco la tabla
            empezando por la cabecera y acabando por las celdas del cuerpo
            a partir de los datos de los objetos vehículos.
        */
    
    }
    
    
    // Constructor del objeto Vehículo con las propiedades marca, modelo, color y año de fabricación
    function Vehiculo(marca, modelo, color,ano_fab){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ano_fab = ano_fab;
        // Le asigna el método arrancar, que dice que el coche con sus correspondientes propiedades ha arrancado por consola
        this.arrancar = function(){
                let texto = "El coche de marca " +  this.marca 
                + " modelo " + this.modelo
                + " color " + this.color
                + " ha arrancado";
        console.log(texto);
        }
    }

    // Crea los objetos coches
    var coche1 = new Vehiculo("Ferrari", "Scaglietti", "Rojo", "2010");
    var coche2 = new Vehiculo("BMW", "Z4", "Blanco", "2010");
    var coche3 = new Vehiculo("Seat", "Toledo", "Azul", "1990");
    var coche4 = new Vehiculo("Fiat", "500", "Verde", "1995");
    
    // listeners
 
    /*
        Añade el evento click al botón de id generarTabla. Al hacer click en este botón, se
        llamará a la función crearTablaCoche() con los bojetos coches creados anteriormente.
    */
    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaCoche(coche1, coche2, coche3, coche4)
            });

}

//Botones para generar las actividades
var boton6 = document.getElementById("ej6");
var boton10 = document.getElementById("ej10");
var content = document.getElementById("content");
// Añade el evento click a los botones de sus respectivas actividades y ejecuta la función correspondiente al hacer click
boton6.addEventListener("click", generaNueve);
boton10.addEventListener("click", generaTrece);