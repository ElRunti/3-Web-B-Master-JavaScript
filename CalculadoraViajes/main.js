// Operador nullish coalescing
let nombre = "Ana";

// Se activa ?? cuando la variable es null/undefined
let nombreFinal = nombre ?? "Invitado";

console.log(nombreFinal);

let edad;

let edadFinal = edad ?? 18;

console.log(edadFinal);

//Operador AND 
let numero = 0;// va a toma el el valor como falso si utilizamos AND
let resultado = numero ?? 10;
console.log(resultado);

// spread operator ...

let numeros = [1,2,3];
let copia = [...numeros];

console.log(copia);

//Poder copiar arreglos sin modificar el original

let frutas = ['manzana','platano','pera']
let nuevasFrutas = [...frutas];

nuevasFrutas.push('mango');
console.log(frutas);
console.log(nuevasFrutas);
