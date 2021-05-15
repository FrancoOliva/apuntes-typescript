abstract class SuperClase {

    // solamente es definido
    abstract metodo1():void

    saludo():void{
        console.log("Holaaa!");
    }
}


class ClaseHijo extends SuperClase {
    
    constructor(){
        super()
    }

    // es obligatorio implementar el método abstract metodo1():void
    // y definirlo
    metodo1():void{
        console.log("Estoy implementando y sobreescribiendo el metodo1");
    }

}