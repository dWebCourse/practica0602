//elementos de entrada de datos
let seleccionar = document.querySelector('select');
let temperatura = document.getElementById('temp');

//elementos de salida de datos
let output = document.getElementById('answer');

//agregamos las acciones
seleccionar.addEventListener('change', establecerClima);
temperatura.addEventListener('change', establecerClima);

//Funcion que va a realizar los cambios en el dom
//los “backticks” (comilla invertida) nos permiten ingresar expresiones dentro del string envolviéndolos en ${…} y tener saltos de carro sin tener errores
function establecerClima() {
    //Asignamos los valores de los inputs a las variables eleccion y tempIngresada
    let eleccion = seleccionar.value;
    let tempIngresada = temperatura.value;

    //Comenzamos con la lógica
    switch (eleccion) {
        case 'soleado':
            if (tempIngresada < 30 && tempIngresada > 10) {
                //fijense que uso innerHTML en lugar de textContent. Esto es porque estoy usando un <BR>. Con textContent me lo escribiría como texto
                output.innerHTML = `Está a ${tempIngresada} grados
                afuera — agradable y soleado.<br>Vamos a la playa, o al parque, y
                comer helado.`;

            } else if (tempIngresada >= 30) {
                output.textContent = `Está a ${tempIngresada} grados
                afuera — ¡QUÉ CALOR! Si deseas salir, asegúrate de aplicarte
                bloqueador solar.`;
            } else {
                output.textContent = 'El día esta agradable y soleado hoy.';
            }
            break;
        case 'lluvioso':
            output.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
            break;
        case 'nevando':
            output.textContent = `Está nevando ─ ¡está congelando!
            Lo mejor es quedarse en casa con una taza caliente de
            chocolate, o hacer un muñeco de nieve.`;
            break;
        case 'nublado':
            output.textContent = `No está lloviendo, pero el cielo
            está gris y nublado; podría llover en cualquier momento, así
            que lleve un saco solo por si acaso.`;
            break;
        default:
            output.textContent = '';

    }
}