import {divCartasJugadores }from '..'

/**
 * Función para crear una carta y agregarla al DOM para un jugador específico.
 * 
 * @param {string} carta - La carta que se va a crear (ej. '2H' para el dos de corazones).
 * @param {number} turno - El índice del jugador (0 para el primer jugador, 1 para el segundo, etc.).
 * @returns {HTMLImageElement} - Crea la img de la carta en pantalla.
 */
 //Funcion para crear la Carta
export const crearCartita =(carta, turno)=> {
   
    let newCarta = document.createElement('img')
    newCarta.src = `cartas/${carta}.png`
    newCarta.classList.add('carta');
    divCartasJugadores[turno].append(newCarta);

    btn3.disabled = false;
}