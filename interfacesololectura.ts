interface Persona {
    readonly nombre:string;
    readonly apellido:string;
}

let ejemplo:Persona = {nombre: 'Franco', apellido: 'Oliva'};

console.log(ejemplo);

// ejemplo.nombre = 'David';  -> esto es marcado como error
// console.log(ejemplo);

