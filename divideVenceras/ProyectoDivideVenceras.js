function findMax(arr) {
    // Caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquistar (recursión)
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar
    return Math.max(leftMax, rightMax);
}

// Ejemplo
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // 10