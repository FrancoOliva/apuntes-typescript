var Vehiculo = /** @class */ (function () {
    // super importante
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    // métodos
    Vehiculo.prototype.acelerar = function () {
        console.log('Acelerando');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('Frenando');
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Ford', '12/7/2018', 4); // instanciamos un objeto de la clase vehiculo
// accedemos a las propiedades o métodos
coche.marca;
coche.fecha;
coche.puertas;
coche.acelerar();
coche.frenar();
