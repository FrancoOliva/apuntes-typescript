class SetGet {
     private atributo:string

    constructor(_atributo:string){
        this.atributo = _atributo;
    }

    set modificarAtributo(p:string){
        this.atributo = p;
    }

    get obtenerAtributo():string{
        return this.atributo; 
    }
}

const ejemplo = new SetGet('atributo de ejemplo');

console.log(ejemplo.obtenerAtributo)
ejemplo.modificarAtributo = "Atributo modificado";
console.log(ejemplo.obtenerAtributo)