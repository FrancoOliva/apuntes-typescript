interface General {
    (nombre:string, apellido:string, edad:number):void
}

let funcionGeneralUno:General =
function(nombre:string, apellido:string, edad:number):void{
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`)
}

funcionGeneralUno('Franco','Oliva',29);

