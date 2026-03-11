if(true){
    var nombre = "ruben";
}

console.log(nombre);// var no resoeta el alcance de bloque

// permite redeclarar y reasignar
var x = 1
var x = 'vaca'
var x = true

if(true){
    let apellido = "Nunez"; // Reference Error, por que let respeta el scope del bloque
}

// console.log(apellido)

let y = 10;
//No permite redeclarar ni reasignar
const z = 20;

const usuario = {nombre: 'Ruben', edad: 20};
usuario.edad = 21;

console.log(usuario);

//Hosting con var / undefined
console.log(mascota);
var mascota = 'Milaneso';
console.log(mascota);

//TDZ, no podemos acceder a una variable antes de que inicialice
// console.log(ciudad);
let ciudad = 'CDMX';
console.log(ciudad);

//Funcuion tradicional +, this depende de como se llama la funcion
function sumar(a,b){
    return a + b;
}

// Funcion de felcha, return explicito, this se hereda del contexto donde fue creado

const Sumar = (numero1, numero2)=>{
    return numero1 + numero2;
}
// Arrow function en una sola linea
const sumar1 = (a , b ) => a + b;
// Parametros sin ()
const duplucar = n => n* 2;
console.log(duplucar(3));
// Retornar un objeto con return explicito
const CrearUser = (nombre) => ({nombre: nombre, active: true});

console.log(CrearUser('Ruben'));

let perro = "puppy";
let comida = "pollo";

// Concatenacion 
let frase1 = 'Hola soy' + perro+ 'como '+comida;

//Template literal

let frase2 = `Hola soy ${perro} y mi comida favorita es ${comida}`;

console.log(frase2);

const persona = {name : 'Romel', edad: 22, ciuedad: 'CDMX'};

const promesa = new Promise(function(resolve, reject){
    const exito =  true;

    if(exito){
        resolve('todo salio cul')
    }else{
        reject('algo salio mal')
    }
});

// cuando esta promesa termine con exito, entonces ejecuta esta funcion
promesa.then(function(resultado){
    console.log(resultado);
});