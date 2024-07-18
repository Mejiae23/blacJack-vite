import {pedirCarta} from './pedir-carta';
import {acumularPuntos} from './acumular-puntos'      
import { deck } from '..';
import {crearCartita} from './crear-cartita'
import { puntosJugadores } from '..';
import { determinarGanador } from './quien-gana';

/**
 * Función que maneja el turno de la PC. La PC sigue tomando cartas hasta superar los puntos del jugador
 * o hasta que sus puntos sean igual o mayores a 21.
 * Si los puntos del jugador superan 21, la PC toma una sola carta.
 * Al final del turno, se determina el ganador del juego.
 */
export const turnoPc = () => {
    console.warn('Aqui COMIENZA el turno de la PC')
    const puntosJugador = puntosJugadores[0];
    let puntosPc = puntosJugadores[puntosJugadores.length - 1];

    if (puntosJugador>21) {
        
        const carta = pedirCarta(deck);
        puntosPc = acumularPuntos(carta, 1);
         crearCartita(carta, 1)
       
        
    } else {
        do {
            const carta = pedirCarta(deck);
            puntosPc = acumularPuntos(carta, 1);
             crearCartita(carta, 1)
          
        } while ((puntosPc < puntosJugador) && (puntosPc < 21));
    }
    
    console.warn('Aqui TERMINA el turno de la PC')
    determinarGanador(puntosJugador, puntosPc)

                    }


