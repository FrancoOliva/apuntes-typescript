# Apuntes TypeScript

Sitio de tipescript: https://www.typescriptlang.org/es/download

npx tsc "archivo.ts"

node "archivo.js" para ejecutarlo

npx tsc --watch "archivo.ts" -> para estar atento a los cambios en el archivo.ts

##### Tipos de variables

**var** numero = 5;                -> No usar - descatalogado

**let** nombre = 'Franco';      -> Valor modificable.

**const** edad = 37;                -> Su valor no se puede modificar. Constante.

##### Tipos de datos

Declarar una variable: **let** [**nombre**] : [**tipo de dato**] = [**asignamos un valor**]

##### Boolean

let si:boolean = true;

let no:boolean = false;

##### **Number**

let numero: number = 50;

let total:number = 500;

##### String

let nombre:string = 'Franco';     -> // siempre dentro de ' ' o " "

let apellido:string = 'Oliva';

##### Array

Hay 2 formas de declarar un arreglo:

<u>Forma 1</u>

let numeros1: number[] = [1,2,3,4,5];

let nombres1: string[] = ['Franco','David','Oliva'];

<u>Forma 2</u>

let numeros2: Array<number> = [1,2,3,4];

let nombres2: Array<string> = ['Franco','David','Oliva'];

##### Tupla

Dentro contienen tipos de tipados a diferencia de los array que solo pueden tener un tipo de dato.

Ej:

let tupla: [number,string,boolean]

tupla = [23,'Franco',true]

##### Funciones y parámetros

Pueden recibir parámetros o no. Son reutilizables.

**Tipos de funciones**

Utilizando la palabra **function**:

function mostrar():void{

console.log('function 1')

}

Utilizando **arrow function**: Es una función autoejecutable que se invoca así misma cada vez que llamamos a la constante mostrar2.

const mostrar2 = ():void => {console.log('function 2')}

**Funciones con parámetros opcionales**

Al agregar **?** le indicamos que ese parámetro puede ir o no.

const opcionales = (nombre:String, apellido:string, **edad?:number**)=>{

console.log("Se llama "+ nombre +", su apellido es "+apellido+

" y su edad es "+edad);

}

opcionales('franco','oliva',**29**) -> agregamos los parámetros al invocar la función

**Funciones con parámetros por defecto**

const mostrar = (nombre:string, apellido:string, **edad:number = 32**) => {

return "Se llama " + nombre + ", se apellida "+ apellido + " y su edad es "+

edad;

}

console.log(mostrar('Franco','Oliva'));

console.log(mostrar('Fede','Rico'));

**Funciones con parámetros REST**

Qué pasa si tengo que pasar una función con una cantidad indefinida de parámetros? Tengo que definirlos todos?

Para este caso tenemos las funciones con parámetros REST

const cartapostres = (postre:string, ...frutas:string[]):void => {

console.log(`El postre es ${postre} y tiene ${frutas}`)

}

cartapostres('postre1', 'naranja','platanos','manzanas')

Clases en Typescript

Una clase es una plantilla de un objeto, con sus métodos y atributos.

Objeto: coche

Atributos : color, marca, número de ruedas, número de puertas, etc.

Métodos: arrancar, acelerar, frenar, etc.

Estos métodos y atributos serían comunes entre los objetos que creamos/instanciamos a partir de la clase u objeto "coche".

**Ejemplo**:

class Vehiculo {

// propiedades

marca:string

fecha:string

puertas:number

// super importante

constructor(marca_:string, fecha_:string,puertas_:number){

this.marca = marca_;

this.fecha = fecha_;

this.puertas = puertas_;

}

// métodos

acelerar():void{

console.log('Acelerando');

}

frenar():void{

console.log('Frenando');

}

}

const coche = new Vehiculo('Ford','12/7/2018',4); // instanciamos un objeto de la clase vehiculo

// accedemos a las propiedades o métodos

coche.marca;

coche.fecha;

coche.puertas;

coche.acelerar();

coche.frenar();

##### Herencia entre clases

class Padre {

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

class Hijo extends Padre{

apellido:string

// tiene que recibir los parámetros de la clase padre y de la clase hijo

constructor(nombre_:string, edad_:number, apellido_:string){

// llamamos al constructor de la clase padre

super(nombre_,edad_);

this.apellido = apellido_;

}

mostrarNombreHijo():void{

console.log(this.nombre);

}

}

const nuevohijo = new Hijo('Franco',29,'Oliva');

nuevohijo.mostrarNombre();

nuevohijo.mostrarNombreHijo();

****

##### Modificadores de acceso públicos (public)

Si no los definimos al crear la clase por defecto son públicos.

class Animal {

public nombre:string

public tamanio:number

public constructor(_nombre:string, _tamanio:number){

this.nombre = _nombre;

this.tamanio = _tamanio;

}

public moverse():void{

console.log('Me estoy moviendo');

}

}

const obj = new Animal('Serpiente', 2)

// podemos acceder a todos sus atributos y métodos

obj.moverse()

obj.nombre

obj.tamanio

##### Modificadores de acceso privado (private)

Si los modificadores son privados, estos son accesibles solo desde dentro de la clase.

class Animal1 {

private nombre:string

private tamanio:number

public constructor(_nombre:string, _tamanio:number){

this.nombre = _nombre;

this.tamanio = _tamanio;

}

public moverse():void{

console.log('Me estoy moviendo');

}

}

const obj1 = new Animal1('Serpiente', 2)

obj1.moverse();

##### Modificadores de acceso protegido (protected)

Los modificadores protegidos (protected) son muy parecidos a los privados (private).

No podemos acceder a sus atributos o métodos desde el exterior de la clase, solo desde el interior.

Pero a diferencia de private, con protected podemos acceder desde una clase que herede de la clase padre.

class Protegido {

protected atributo1:string

protected atributo2:string

constructor(_a:string, _b:string){

this.atributo1 = _a;

this.atributo2 = _b;

}

protected llamarAtributos():void{

console.log("Llamando atributos");

}

}

const a = new Protegido('Franco','Oliva');

// Property 'atributo1' is protected and only accesible

// within class 'Protegido' and its subclases

// a.atributo1 -> error

class SubClass extends Protegido{

super(a,b){

}

}

##### SET y GET en TypeScript

Con estos métodos podemos consultar o modificar atributos de una manera más segura.

Podemos utilizarlos para acceder a propiedades y métodos privados.

Para poder compilar el archivo.ts con los ejemplos de set y get, tenemos que hacerlo así: npx tsc --target ES2016 set_get porque sino nos va a arrojar un error.

class SetGet {

private atributo:string

constructor(_atributo:string){

this.atributo = _atributo;

}

set modificarAtributo(p:string){

this.atributo = p;

}

get obtenerAtributo():string{

return this.atributo;

}

}

const ejemplo = new SetGet('atributo de ejemplo');

console.log(ejemplo.obtenerAtributo)

ejemplo.modificarAtributo = "Atributo modificado";

console.log(ejemplo.obtenerAtributo)

##### Clases abstractas en TypeScript

Es una plantilla en la que vamos a definir tanto propiedades como métodos que luego, van a tener que heredar otras clases hijas en las cuales, van a tener que implementar estos métodos o propiedades creados en la clase padre.

Ej: Una clase padre solo define un método y la clase hija, lo hereda, define e implementa.

abstract class SuperClase {

// solamente es definido

abstract metodo1():void

saludo():void{

console.log("Holaaa!");

}

}

class ClaseHijo extends SuperClase {

constructor(){

super()

}

// es obligatorio implementar el método abstract metodo1():void

// y definirlo

metodo1():void{

console.log("Estoy implementando y sobreescribiendo el metodo1");

}

}

# Interfaces en TypeScript

Es una pequeña plantilla donde podemos definir propiedades y funciones pero, a la hora de implementarlas, necesitamos que sean exactamente iguales a como nosotros las definimos.

interface Persona {

// podemos tener atributos y métodos

nombre:string

}

function caminar(persona:Persona):void{

console.log('La persona '+ persona.nombre + ' esta caminando.');

}

let n_persona:Persona = {nombre: 'Franco'};

caminar(n_persona);

##### Parámetros opcionales en una interface

interface Persona {

altura:number;

peso:number;

nombre?:string; // ? hace que un parámetro o propiedad sea opcional

}

function mostrarMediaDePedo(persona:Persona):string{

// es un ejemplo

let mediapeso:number = persona.altura / persona.peso;

if(persona.nombre){

return `${persona.nombre} tiene una media de ${mediapeso}`

} else {

return `Tiene una media de ${mediapeso}`

}

}

let persona:Persona = {altura: 2, peso: 120, nombre: 'Franco'} // nombre es opcional, puede ir o no

console.log(mostrarMediaDePedo(persona));

##### Parámetros de solo lectura

En este caso tenemos que utilizar **readonly** en las propiedades o funciones de la interface que vayamos a crear. Esto permite que no se puedan modificar las propiedades después de que se instancia una interface.

interface Persona {

readonly nombre:string;

readonly apellido:string;

}

let ejemplo:Persona = {nombre: 'Franco', apellido: 'Oliva'};

console.log(ejemplo);

// ejemplo.nombre = 'David';  -> esto es marcado como error

// console.log(ejemplo);

Interfaces para funciones

Ya no definimos las propiedades, le decimos qué parámetros va a recibir, de qué tipo y qué va a devolver la función. Es solo una plantilla, no va a realizar ningún cuerpo de función, ninguna acción digamos. ({cuerpo})

interface General {

(nombre:string, apellido:string, edad:number):void

}

let funcionGeneralUno:General =

function(nombre:string, apellido:string, edad:number):void{

console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`)

}

funcionGeneralUno('Franco','Oliva',29);




