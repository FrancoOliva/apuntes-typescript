interface Persona {
    // podemos tener atributos y métodos

    nombre:string
}

function caminar(persona:Persona):void{
    console.log('La persona '+ persona.nombre + ' esta caminando.');
}

let n_persona:Persona = {nombre: 'Franco'};

caminar(n_persona);
