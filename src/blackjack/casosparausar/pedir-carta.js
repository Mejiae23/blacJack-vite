/**
 * Función para pedir una carta del deck.
 * 
 * @param {Array<string>} deck - Arreglo que representa el mazo de cartas.
 * @returns {string}  - La carta extraída del mazo.
  */

 export const pedirCarta = (deck) => {


    if (!deck || deck=== 0) {throw new Error('El deck no esta llegando bien');}
    //Funcion para pedir Carta
    if (deck.length === 0) {
        throw 'No hay cartas en el Deck';
    }
    let carta = deck.pop();
    return carta;
}
