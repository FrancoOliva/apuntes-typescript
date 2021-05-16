interface Persona {
    altura:number;
    peso:number;
    nombre?:string; // ? hace que un parámetro o propiedad sea opcional

}

function mostrarMediaDePedo(persona:Persona):string{
    // es un ejemplo
    let mediapeso:number = persona.altura / persona.peso;

    if(persona.nombre){
        return `${persona.nombre} tiene una media de ${mediapeso}`
    } else {
        return `Tiene una media de ${mediapeso}`
    }
}

let persona:Persona = {altura: 2, peso: 120, nombre: 'Franco'} // nombre es opcional, puede ir o no

console.log(mostrarMediaDePedo(persona));