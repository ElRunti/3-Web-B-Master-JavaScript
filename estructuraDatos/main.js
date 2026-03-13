const listaCompras = [];

export const agregarProducto = (producto)=>{
    if(listaCompras.includes(producto.toLowerCase())){
        console.log(`El producto ${producto} esta en la lista`);
        return;
    }
    listaCompras.push(producto.toLowerCase());
    console.log(`${producto} agregado`)
};

export const eliminarProducto = (prodcuto) => {
    const indice = listaCompras.indexOf(prodcuto.toLowerCase());

    if (indice !== -1){
        listaCompras.splice(indice, 1);
        console.log(`Producto ${prodcuto} eliminado`)
    }else{
        console.log(`El producto ${prodcuto} no se encontro`)
    }
}


export const mostrarLista = ()=>{
    console.log('Lista de productos')
    if(listaCompras.length === 0){
        console.log('No hay productos');
    }
    else{
        listaCompras.forEach((p , i) => {
            console.log(`${i+1}. ${p}`)
        });
    }
};