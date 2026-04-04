//Node.js modulo llamado fs Files System, o sistema de archivos

//Importando el modulo
const { error } = require('console');
const fs  = require('fs')

//guardar ruta en una constante
const rutaArchivo = 'C:\\Users\\diana\\Desktop\\PRACTICA\\01\\04\\26\\ejemplo.txt';
console.log(rutaArchivo);



//Verificar si un archivo existe
if(fs.existsSync(rutaArchivo)){
    //Solo si existe el archivo
    console.log('El archivo existe');

}else{
    console.log("El archivo no existe");
}

//Leer el contenido 
fs.readFile('C:\\Users\\diana\\Desktop\\PRACTICA\\01\\04\\26\\ejemplo.txt', 'utf8', (error, contenido) => {
   if(error){
        console.error('Ocurrio un error al leer el archivo', error);
        return;// Con return detenemos esta funcion
    }
    //Si no existio ningun error
    console.log('Contenido del archivo:');
    console.log(contenido);
})

// Escribir un archivo si no existe , o cambiar el contenido de uno existente
fs.writeFile('C:\\Users\\diana\\Desktop\\PRACTICA\\01\\04\\26\\ejemplo.txt', 'Hola, Node.Js esto fue escrito desde app.js  WOOOEOEOEOE', (error)=>{
     if(error){
        console.error('Ocurrio un error al ESCRIBIR el archivo', error);
        return;// Con return detenemos esta funcion
    }
    //Si no existio ningun error
    console.log('El archivo fue escrito correctamente');
})
// Agregar contenido
fs.appendFile('C:\\Users\\diana\\Desktop\\PRACTICA\\01\\04\\26\\ejemplo.txt', '\nEsta es una nueva linea que se agrego a nuestro archivoo!', (error)=>{
     if(error){
        console.error('Ocurrio un error al agrear contenido al archivo', error);
        return;// Con return detenemos esta funcion
    }
        console.log('El contenido fue agregado correctanmente');
})
// Esta funcion es util para logs, bitacoras , historiales o algun archivo que crezca con el tiempo

//Eliminar un archivo
fs.unlink('C:\\Users\\diana\\Desktop\\PRACTICA\\01\\04\\26\\ejemplo.txt', error => {
         if(error){
        console.error('Ocurrio un error al ELIMINAR contenido al archivo', error);
        return;// Con return detenemos esta funcion
    }
    console.log('El archivo fue ELIMINADO correctamente')
})