import { puntosJugadores } from "..";

/**
 * Función para determinar el ganador del juego comparando los puntos del jugador y de la PC.
 * Desactiva los botones de juego una vez que se determina el ganador.
 */
export const determinarGanador=()=>{

    const [ puntosJugador, puntosPc ] = puntosJugadores
   

    setTimeout(() => {
       if (puntosJugador === 21) {
       
        (puntosJugador===puntosPc)? alert('Empataron mi loco'):alert('Ganaste con 21!! mi loco');
          
       } else if (puntosJugador < 21 && puntosPc >21 ) {
           alert('Ganaste mi loco');

        } else if (puntosJugador< puntosPc || puntosJugador > 21){
            alert('Perdiste Mi loco!');
        }
    }, 10 );

    btn2.disabled = true;
    btn3.disabled = true;

}