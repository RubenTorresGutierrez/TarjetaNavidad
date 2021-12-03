/**
*   @file App
*   @description Archivo que controla el dinamismo de la Tarjeta de Navidad
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'
window.onload = iniciar;

function iniciar(){

    let botones = document.getElementsByClassName('botonMover');
    //botones.setAttribute('onclick', 'desplazamiento()');
    for (const boton of botones) {
        boton.onclick = desplazamiento;
    }
    

}

function desplazamiento(){
    
    let audio = document.createElement('audio');
    audio.setAttribute('src', 'recursos/audio/desplazamiento.wav');
    audio.play();

}