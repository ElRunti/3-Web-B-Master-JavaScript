function binarySearch(arr, target, low = 0, high = arr.length - 1){
    //Caso base, donde ya no podamos buscar
    console.log(`Buscando el numero ${target} entre los indices ${low} y ${high}`);
    if(low > high){
        console.log('No encontrado')
        return -1; //No lo encontro
    }

    //Paso 1. Dividir
    let mid = Math.floor((low + high) /2);
    console.log(`Variable MID: ${mid} valor: ${arr[mid]}`);
    //Math.floor redondea al numero mas bajo

    //Paso 2. Conquistar 
    if(arr[mid] === target){
        console.log(`Encontrado en el indice ${mid}`)
        return mid; //Si encontramos ese valor
    }

    //Paso 3. Seguir dividiendo
    if( arr[mid] > target){
        //Buscamos en la mitad izquierda
        console.log("'Buscamos en la mitad izquierda");
        return binarySearch(arr, target,low,mid - 1);
    }else{
        //Buscar en la mitad derecha
        console.log("'Buscamos en la mitad derecha")
        return binarySearch(arr, target, mid + 1, high);
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 8));