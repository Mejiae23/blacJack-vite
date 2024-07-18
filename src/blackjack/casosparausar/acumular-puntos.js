import { valorCarta } from "./valor-carta";
import { puntosJugadores } from "..";
import { puntosPantalla } from "..";

/**
 * Función para acumular los puntos de un jugador.
 * 
 * @param {string} carta - La carta cuyo valor se va a sumar.
 * @param {number} turno - El índice del jugador que está jugando (0 para el primer jugador, 1 para el segundo, etc.).
 * @returns {number} - Los puntos acumulados del jugador después de sumar el valor de la carta.
 */
export const acumularPuntos = (carta, turno) => {

    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosPantalla[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}