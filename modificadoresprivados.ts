class Animal1 {
    private nombre:string
    private tamanio:number

    public constructor(_nombre:string, _tamanio:number){
        this.nombre = _nombre;
        this.tamanio = _tamanio;
    }

    public moverse():void{
        console.log('Me estoy moviendo');
    }
}

const obj1 = new Animal1('Serpiente', 2);

