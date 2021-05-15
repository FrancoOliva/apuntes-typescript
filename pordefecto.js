var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return "Se llama " + nombre + ", se apellida " + apellido + " y su edad es " +
        edad;
};
console.log(mostrar('Franco', 'Oliva'));
console.log(mostrar('Fede', 'Rico'));
