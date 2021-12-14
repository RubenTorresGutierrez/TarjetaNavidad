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

class App{

    constructor(){
	
	window.onload = this.iniciar.bind(this);

	//ATRIBUTOS
	this.misterio = document.querySelector('main > section:last-child > .imagen');

    }

    iniciar(){

	//BOTONES
	let botones = document.getElementsByClassName('botonMover');
	for (const boton of botones) {
	    boton.onclick = this.desplazamiento;
	}

	//Efecto imagen
	window.setInterval(this.animarImagen.bind(this), 1000);

    }

    desplazamiento(){
    
	let audio = document.createElement('audio');
	audio.setAttribute('src', 'recursos/audio/desplazamiento.wav');
	audio.play();

    }

    animarImagen(){

	if(this.misterio.style.width == '50%')
	    this.misterio.style.width = '55%';
	else this.misterio.style.width = '50%';

    }

}

let app = new App();
