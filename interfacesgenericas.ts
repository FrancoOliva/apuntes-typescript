interface Persona<T> {
    nombre: T

}

// en este caso decimos que Persona que es una interface de tipo genérico
// va a ser de tipo string o number o lo que sea que necesitemos en ese momento

let obj:Persona<string> = { nombre: 'Franco'}
let obj2:Persona<number> = {nombre: 105}