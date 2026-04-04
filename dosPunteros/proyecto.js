const invitados = ["Ana", "Andres", "Ruben", "Danonino", "Jorge", "Edgar"];

function encontrarPareja(arr) {
    let index = 0;
    let next = 1;

    while (next < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // para poder comparar la inicial del arreglo basta con poner nombreArreglo[indice][posicionLetra]
        if( arr[index][0] === arr[next][0]){
            console.log("Encontrados");
            // Si coinciden, devuelve el par
            // para que devuelva los encontrados se debe de meter en un arreglo
            return [arr[index], arr[next]];
        }else{
            console.log("Buscando");
        }
        // TODO: Avanza los punteros si no coinciden
        index++; // avanza de lado izquierdo
        next++; // avanza de lado derecho
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Ana", "Andres"]