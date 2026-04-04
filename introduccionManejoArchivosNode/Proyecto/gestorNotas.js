const { error } = require('console');
const fs  = require('fs');
const { parse } = require('path');
const filePath = 'C:\\Users\\diana\\Desktop\\MODULO4JS\\introduccionManejoArchivosNode\\Proyecto\\notas.json';


function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }
  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    // PISTA: Debes leer y parsear el contenido del archivo.
    const data = fs.readFileSync(filePath,'utf8');
    const notas = JSON.parse(data);
    // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    console.log('Listar notas');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo} → ${nota.contenido}`);
    });
      } else {
    console.log(' No hay notas guardadas.');
  
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {

  if (fs.existsSync(filePath)) {

    const data = fs.readFileSync(filePath, 'utf8');

    const notas = JSON.parse(data);

    const notasRestantes = notas.filter(nota => nota.titulo !== titulo);

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));

    console.log(`Nota "${titulo}" eliminada.`);

  } else {
    console.log(' No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');

// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
[
  { "titulo": "Compras", "contenido": "Comprar leche y pan." },
  { "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
]

// // #### Operaciones clave: ###
// // 1. Para leer las notas existentes:
// const data = fs.readFileSync(filePath, 'utf8');
// const notas = JSON.parse(data);

// // 2. Para guardar las notas actualizadas:
// fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));

// // 3. Filtrar notas para eliminar:
// const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);