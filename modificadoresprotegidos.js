var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Protegido = /** @class */ (function () {
    function Protegido(_a, _b) {
        this.atributo1 = _a;
        this.atributo2 = _b;
    }
    Protegido.prototype.llamarAtributos = function () {
        console.log("Llamando atributos");
    };
    return Protegido;
}());
var a = new Protegido('Franco', 'Oliva');
// Property 'atributo1' is protected and only accesible
// within class 'Protegido' and its subclases
// a.atributo1 -> error
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubClass.prototype["super"] = function (a, b) {
    };
    return SubClass;
}(Protegido));
var b = new SubClass('Franco', 'Oliva');
b["super"](a, b);
