//Lista de ubicaciones para las imagenes.
var imgList = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/5.jpeg",
    "img/6.jpeg",
    "img/7.jpeg",
    "img/8.jpeg",
    "img/9.jpeg",
    "img/10.jpeg"
];

var i = 0;

var canvas = document.getElementById("canvasImg");
var ctx = canvas.getContext("2d");

//instancia un nuevo objeto de la clase Image.
var img = new Image();
dibujarImagen();

//Carga evento click a los botones.
agregarEventoClick("btnSiguiente", siguienteImagen);
agregarEventoClick("btnAnterior", anteriorImagen);

//Dibuja la siguiente imagen de la lista en el canvas.
function siguienteImagen() {
    i++;
    if(i < 10){
        dibujarImagen();
    } else {
        i = 0;
        dibujarImagen();
    }
}

//Dibuja la anterior imagen de la lista en el canvas.
function anteriorImagen() {
    i--;
    if(i >= 0){
        dibujarImagen();
    } else {
        i = 9;
        dibujarImagen();
    }
}

//Carga una imagen en el canvas.
function dibujarImagen() {
    //Busca la imagen.
    img.src = imgList[i];
    //Dibuja la imagen y define su posicion.
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    }
    
    //Define tamaño del canvas
    let contCanvas = document.getElementById('contenedorImg'); //Div contenedor del canvas.
    canvas.width = 400;
    canvas.height = 400;
}

/**
 * Agrega manejador de eventos click a un elemento del DOM
 * @param {string} id //ID del elemento al que se le asignara el manejador
 * @param {function} func //El nombre de la funcion manejadora del evento
 */
function agregarEventoClick(id, func) {
    let x = document.getElementById(id);
    if (x != null) {  //Si existe el elemento
        x.removeEventListener('click', func, false);
        x.addEventListener('click', func, false);
    }
}