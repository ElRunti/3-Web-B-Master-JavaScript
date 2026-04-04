// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    // Aqui se compara el nombre con lo que hay en la posicion index del arreglo gifts
    if(giftName === gifts[index]){
        //si lo encuentra lo regresa con el formato `` por que si ponemos de nuevo console.log se vuelve undefined
        return `${gifts[index]} esta en la posicion ${index}`;
    }else{
        // se llama a la funcion otra vez y se suma 1 al index que iniciaba en 0
        return findGift(gifts,giftName,index + 1);
    }
}
giftToFind = "Rompecabezas";
console.log(findGift(gifts, giftToFind));
