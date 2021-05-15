class Protegido {
    protected atributo1:string
    protected atributo2:string

    constructor(_a:string, _b:string){
        this.atributo1 = _a;
        this.atributo2 = _b;        
    }

    protected llamarAtributos():void{
        console.log("Llamando atributos");
    }
}

const a = new Protegido('Franco','Oliva');

// Property 'atributo1' is protected and only accesible
// within class 'Protegido' and its subclases
// a.atributo1 -> error

class SubClass extends Protegido{
    super(a,b){

    }
}


