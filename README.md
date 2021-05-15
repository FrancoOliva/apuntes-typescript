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
