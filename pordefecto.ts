const mostrar = (nombre:string,apellido:string,edad:number = 32) => {
    return "Se llama " + nombre + ", se apellida "+ apellido + " y su edad es "+
    edad;
}

console.log(mostrar('Franco','Oliva'));
console.log(mostrar('Fede','Rico'));