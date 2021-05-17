// Qué son los datos genéricos?
// TypeScript esta diseñado para ser un lenguaje de tipado.
// En el echo de poder tener un tipo de dato "any" es básicamente
// contraproducente en el lenguaje y genera ciertos errores.
// Para ello nacen los datos o el tipado genérico.
function mostrar(dato) {
    return dato;
}
console.log(mostrar('Franco'));
// función genérica  "T" -> por convención
function mostrargenerica(dato) {
    return dato;
}
console.log(mostrargenerica('Oliva'));
