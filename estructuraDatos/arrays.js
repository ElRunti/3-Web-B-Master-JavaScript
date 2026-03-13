const usuarios =[
    {id: 1, nombre: 'Ruben'},
    {id: 2, nombre: 'Joaquin'}
]

const encontrado = usuarios.find((u) => u.id == 2);
console.log(encontrado);

// El metodo map() crea un nuevo arreglo pero con el resultado de aplicar un funcion
const precios = [100,200,300,400]
const preciosConIva = precios.map((p) =>{
    const iva = p * 0.16;
    const total = p + iva;
    return total; // Esto se guarda en el nuevo arreglo
});

console.log('Original', precios);
console.log('Con Iva', preciosConIva);

//El metodo forEach() No es para construir un nuevo arreglo

const apellidos = ['Villanueva','Velazquez','Serrano'];

apellidos.forEach((apellidos, index )=>{
    console.log('Posicion', index, 'Apellido', apellidos)
});

// El metodo some() nos va a decir si exise  AL MENOS un elemento que cumpla con la condicion
// funciona con true o false

const preciosNuevos = apellidos.some((p) => p === 'Serrano');
console.log(preciosNuevos);

// El metodo every() es si todos cumplen
// El metodo sort() ordena (y normalmente muta) una lista

//El metodo reduce() sirve para reducir un arreglo a un solo valor

const numeritos = [1,2,3,4];

// const suma = numeritos.reduce((acumulador))

//Uso de splice()

let frutilla = ['manzana', 'pera','platanito'];
frutilla.splice(1,1);