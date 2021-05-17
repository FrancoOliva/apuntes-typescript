class Persona<T>{
    nombre:string
    edad:T

    Mostrar:(dato:T) => T
}

// Una clase ya es de un tipo, en este caso lo que hacemos al indicar
// que es de tipo genérico, es que puede contener propiedades o funciones T