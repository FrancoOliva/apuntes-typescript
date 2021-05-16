function mostrarMediaDePedo(persona) {
    // es un ejemplo
    var mediapeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return persona.nombre + " tiene una media de " + mediapeso;
    }
    else {
        return "Tiene una media de " + mediapeso;
    }
}
var persona = { altura: 2, peso: 120, nombre: 'Franco' }; // nombre es opcional, puede ir o no
console.log(mostrarMediaDePedo(persona));
