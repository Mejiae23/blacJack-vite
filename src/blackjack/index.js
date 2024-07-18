import _ from 'underscore';
import {pedirCarta,turnoPc, creardeck, acumularPuntos,crearCartita } from './casosparausar'
export {acumularPuntos}


export let deck = [];
export const tipos = ['C', 'D', 'H', 'S'];
export const especiales = ['A', 'J', 'Q', 'K'];
export let puntosJugadores = [];

// Referencias del HTML
export const btn1 = document.querySelector('#btn1')
export const btn2 = document.querySelector('#btn2')
export const btn3 = document.querySelector('#btn3')
export const puntosPantalla = document.querySelectorAll('small')
export const divCartasJugadores = document.querySelectorAll('.divCartitas')

btn3.disabled = true;

(() => {
  'use strict'

  //Funcion para inicializar el Game
  const inicializarJuego = (numJugadores = 2) => {

      deck = creardeck(tipos, especiales);

      puntosJugadores = [];  // Reiniciar puntosJugadores
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
                                                }
      
      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      puntosPantalla.forEach(elem =>elem.innerText = 0);  
    
      btn2.disabled = false;
      btn3.disabled = true;
      console.warn('Aqui COMIENZA el turno del Jugador')
                                                                        }
 // Botón para Juego Nuevo
    btn1.addEventListener('click', () => {
    
    inicializarJuego();
     
    })

  // Botón de pedir carta
  btn2.addEventListener('click', () => {
    

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0);
     
      // Crear la carta
      crearCartita( carta, 0 );
      // Limitar los botones por los puntos
      if (puntosJugador >= 21) {
          btn2.disabled = true;
          btn3.disabled = true;
          console.warn('Aqui TERMINA el turno del Jugador')
          turnoPc();
      }
     
  })

  
  // Botón para detener el juego
  btn3.addEventListener('click', () => {
      btn2.disabled = true;
      btn3.disabled = true;
      console.warn('Aqui TERMINA el turno del Jugador')
     
      turnoPc();
  })

 
  inicializarJuego()

})();

