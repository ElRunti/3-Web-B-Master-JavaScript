// arreglo de objetos con almenos 5 productos, cada uno con las propiedades, nombre precio y categoria.

const productos =[
{nombre: "Camiseta", precio: 15, categoria: "Ropa"},
{nombre: "Pantalón Denim", precio: 35, categoria: "Ropa"},
{nombre: "Zapatillas Deportivas", precio: 60, categoria: "Calzado"},
{nombre: "Gorra de Béisbol", precio: 20, categoria: "Accesorios"},
{nombre: "Sudadera con Capucha", precio: 45, categoria: "Ropa"},


];




// filter
const filtrado = productos.filter(productos => productos.precio < 100);
console.log("Productos filtrados < 100 ", filtrado);

// Sort
const ordenados = productos.sort((a,b) => a.nombre.localeCompare(b.nombre)); // localcompare compara string
console.log("\nProductos ordenados: ",ordenados);
//map
const nombres = productos.map(productos => productos.nombre);// devuelve solo el nombre del producto
console.log("Nombre de productos: ",nombres);
console.log('Resultados de usar los metodos Filter, Sort y Map')






// Segunda manera de hacerlo
// // Encadenamiento de metodos
// const resultado = productos
// // filter
// .filter(productos => productos.precio < 100)

// // Sort
// .sort((a,b) => a.nombre.localeCompare(b.nombre)) // localcompare compara string

// //map
// .map(productos => productos.nombre);// devuelve solo el nombre del producto

// console.log('Resultados de usar los metodos Filter, Sort y Map')
// console.log(resultado);
