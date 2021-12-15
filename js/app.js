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
	
	//ATRIBUTOS
	//Main donde se encuentran los sections
	this.main = document.getElementsByTagName('main')[0];
	//Sections (tarjetas)
	this.sections = document.querySelectorAll('main > section');
	//Índice de en que section está
	this.indice = 0;
	//Botones de desplazamiento
	this.botonesAbajo = document.getElementsByClassName('botonAbajo');
	this.botonesArriba = document.getElementsByClassName('botonArriba');
	//Imagen del misterio
	this.misterio = document.querySelector('main > section:last-child > .imagen');
	
	//Scroll
	//Tiempo de espera entre scroll y scroll
	this.tiempoEspera = 1000;
	//Último scroll realizado
	this.ultimoScroll = 0;
	
	window.onload = this.iniciar.bind(this);

    }

    iniciar(){

	//BOTONES
	for (const boton of this.botonesAbajo) {
	    boton.onclick = this.moverAbajo.bind(this);
	}
	
	for (const boton of this.botonesArriba) {
	    boton.onclick = this.moverArriba.bind(this);
	}

	//Aplicar la clase transicion a los elementos del primer section
	for(const elemento of this.sections[0].children)
	    elemento.classList.add('transicion');

	//Efecto con scroll
	this.main.addEventListener('wheel', (e) => {
	    
	    //Obtener el tiempo actual en ms
	    const tiempoActual = new Date().getTime();

	    //Comprobar si ya ha pasado el tiempo de espera entre scroll y scroll
	    if(tiempoActual - this.ultimoScroll < this.tiempoEspera){
		e.preventDefault();
		return;
	    }

	    //Comprobar si el scroll es negativo(abajo) o positivo(arriba)
	    if(e.wheelDelta < 0)
		this.moverAbajo();
	    else this.moverArriba();

	    //El último scroll pasa a ser el tiempo actual en ms
	    this.ultimoScroll = tiempoActual;

	})

	//Efecto imagen
	window.setInterval(this.animarImagen.bind(this), 1000);

    }

    moverArriba(){

	if(this.indice < 1)
	    return;

	this.indice--;
	this.movimiento();

    }

    moverAbajo(){
	
	if(this.indice > this.sections.length - 2)
	    return;

	this.indice++;
	this.movimiento();

    }

    movimiento(){
	 
	//AUDIO
	this.audio();

	//MOVIMIENTO
	this.sections.forEach((section, i) =>{
	    for(const elemento of section.children)
		elemento.classList.remove('transicion');
	    if(i == this.indice){
		section.scrollIntoView({behavior: 'smooth'});
		for(const elemento of section.children)
		    elemento.classList.add('transicion');
	    }
	});

    }

    audio(){
	
	const audio = document.createElement('audio');
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
