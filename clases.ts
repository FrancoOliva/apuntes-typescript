class Vehiculo {

    // propiedades
    marca:string
    fecha:string
    puertas:number

    // super importante
    constructor(marca_:string, fecha_:string,puertas_:number){
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }

    // métodos
    acelerar():void{
        console.log('Acelerando');
    }

    frenar():void{
        console.log('Frenando');
    }

}

const coche = new Vehiculo('Ford','12/7/2018',4); // instanciamos un objeto de la clase vehiculo


// accedemos a las propiedades o métodos
coche.marca;
coche.fecha;
coche.puertas;

coche.acelerar();
coche.frenar();