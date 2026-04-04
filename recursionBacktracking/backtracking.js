//
function generarSubconjuntos(nums){
    //Aqui guardamos los subconjuntos finales
    const resultado = [];

    function backtrack(inicio, camino){
        //Guardar una copia del camino actual
        resultado.push([...camino]);

        for(let i = inicio; i <  nums.length; i++){
            //Elegir (agregamos el elemento actual al subconjunto)
            camino.push(nums[i]);

            //Exlporar (llamamos recurivamente avanzado al siguiente indice (i+1))
            backtrack(i + 1, camino);

            //Deshacer la decision(retrocesp)
            camino.pop();
        }
    }
        //Iniciamos desde el indice 0 y con un subconjunto vacio
        backtrack(0,[]);
        console.log(`Total de subconjuntos = ${resultado.length}`)
        return resultado;
}

console.log(generarSubconjuntos([1,2,3]));