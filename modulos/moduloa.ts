// así le decimos a typescript que vamos a exportar esta variable en otro archivo


export const nombre:string = 'Franco'

export interface Humano {
    nombre:string
}

export const mostrar = ():void => {console.log('Soy una arrow function')}

export class Persona {
    nombre:string
    edad:number
    altura:number

    constructor(nombre,edad,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }

    mostrar():void{
        console.log(this.nombre);
    }
}

// de esta manera le decimos a typescript que necesitamos exportar
// todo este objeto por defecto y para importarlo es un poco diferente también
export default Persona