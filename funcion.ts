// funciones sin parámetros
function mostrar():void{
    console.log('function 1')
}

const mostrar2 = ():void => {console.log('function 2')}

// funciones con parámetros
const opcionales = (nombre:String, apellido:string, edad?:number)=>{
    console.log("Se llama "+ nombre +", su apellido es "+apellido+
    " y su edad es "+edad);
}

opcionales('franco','oliva')