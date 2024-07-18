

/**
 * Calcula el valor de una carta en el juego.
 * Las cartas numéricas valen su número. Las cartas con letras (A, J, Q, K) tienen valores específicos.
 *
 * @param {string} carta - La carta de la que se quiere obtener el valor.
 * @returns {number} - El valor de la carta: 2-10 para cartas numéricas, 10 para J, Q, K, y 11 para A.
 */
 export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}