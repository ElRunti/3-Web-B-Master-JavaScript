// function encontrarPar(arr, objetivo){
//     //Puntero que inicia al principio de mi arreglo
//     let izquierda = 0;

//     //Puntero que inicia al final del arreglo
//     let derecha = arr.length -1;
//     //Mientras los punteros no se crucen 
//     while(izquierda < derecha){
//         //Calcular la suma de ambos valores
//         let suma = arr[izquierda] + arr[derecha];
//         // Si encontramos el objetivo
//         if (suma === objetivo){
//             // Regresar el par encontrado
//             return [arr[izquierda], arr[derecha]];
//         }
//         //Si la suma es menor que el objetivo
//         else if(suma < objetivo){
//             //Nos movemos hacia la izquierda
//             izquierda++;

//         }else{
//             //Si la suma es mayor
//             derecha--;
//         }
//     }
//     //Si no encontramos ningun par
//     return null;
// }

// let numeros = [2,4,7,10,15,20,40,80];
// let resultado = encontrarPar(numeros, 9);
// console.log(resultado);

//Funcion para saber si es palindromo
function Palindromo(oracion) {

    let izquierda = 0;
    let derecha = oracion.length - 1;

    while (izquierda < derecha) {

        if (oracion[izquierda] !== oracion[derecha]) {
            return false;
        }

        izquierda++;
        derecha--;
    }

    return true;
}

let palabra = "radar";

let resultado = Palindromo(palabra);

console.log(resultado);