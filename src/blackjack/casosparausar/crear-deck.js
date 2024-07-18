import _ from 'underscore'

let deck = [];

/**
 * Crea un nuevo mazo de cartas.
 * 
 * @param {Array<string>} tiposDCartas - Los tipos de cartas ['C', 'D', 'H', 'S'].
 * @param {Array<string>} cartasEspeciales - Las cartas especiales ['A', 'J', 'Q', 'K'].
 * @returns {Array<string>} El mazo de cartas barajado.
 * 
 * @example
 * const tipos = ['C', 'D', 'H', 'S'];
 * const especiales = ['A', 'J', 'Q', 'K'];
 * const nuevoMazo = creardeck(tipos, especiales);
 * console.log(nuevoMazo);
 */
export const creardeck = (tiposDCartas, cartasEspeciales) => {
   
    deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDCartas) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDCartas) {
        for (let esp of cartasEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
   return deck;
   
}
export {deck};


