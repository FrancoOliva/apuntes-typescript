class Padre {
    nombre:string
    edad:number

    constructor(nombre_:string, edad_:number){
        this.nombre = nombre_;
        this.edad = edad_;
    }

    mostrarNombre():void{
        console.log(this.nombre);
    }
}

class Hijo extends Padre{
    apellido:string
    

    // tiene que recibir los parámetros de la clase padre y de la clase hijo
    constructor(nombre_:string, edad_:number, apellido_:string){
        // llamamos al constructor de la clase padre
        super(nombre_,edad_);
        this.apellido = apellido_;
    }

    mostrarNombreHijo():void{
        console.log(this.nombre);
    }
}

const nuevohijo = new Hijo('Franco',29,'Oliva');
nuevohijo.mostrarNombre();
nuevohijo.mostrarNombreHijo();