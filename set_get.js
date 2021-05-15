class SetGet {
    constructor(_atributo) {
        this.atributo = _atributo;
    }
    set modificarAtributo(p) {
        this.atributo = p;
    }
    get obtenerAtributo() {
        return this.atributo;
    }
}
const ejemplo = new SetGet('atributo de ejemplo');
console.log(ejemplo.obtenerAtributo);
ejemplo.modificarAtributo = "Atributo modificado";
console.log(ejemplo.obtenerAtributo);
