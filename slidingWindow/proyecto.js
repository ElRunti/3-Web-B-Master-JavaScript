function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    
    const words = text.split(" ")

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for(let i = 0; i < words.length; i++){
        if(longestWord.length >= words[i].length ){
            console.log('buscando...')
        }
        else{
            longestWord = words[i];
        }
    }
    return longestWord;
    
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"

