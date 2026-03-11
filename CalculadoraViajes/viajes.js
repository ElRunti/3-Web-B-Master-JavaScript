// importar la funcion que calcula costos
import { CalcularCosto } from "./costos.js";

// se usa const por que no vamos a cambiar el arreglo
const destinos =[];
// funcion para crear un nuevo viaje
export const resgitrarDestino = (
    destino,
    fecha,
    trasporte,
    {alojamiento = "Hotel", noches = 0, personas = 1}={}
)=> {
    // Crear un objeto que represente un viaje

    const nuevoViaje = {
        // gaurdamos los datos del viaje
        destino,
        fecha,
        trasporte,
        alojamiento,
        noches,
        personas,
        // Calcular el costo llamando a nuestra funcion
        costo: CalcularCosto({
            destino,
            trasporte,
            alojamiento,
            noches,
            personas
        })
    };
    // agregamoss el viaje al arreglo
    destinos.push(nuevoViaje);

    return nuevoViaje;
};

export const obtenerItinerario = () => {
    return [...destinos];
};

export const mostrarItinerario = () => {
    if (destinos.length === 0){
        console.log('No tiene viajes');
        return;
    }

    destinos.forEach((viaje, idx) =>{
        console.log(`${idx + 1}`);

        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.trasporte}`);
        console.log(`Alojamientos: ${viaje.alojamiento}`);
        console.log(`Personas ${viaje.personas}`);
        console.log(`Costo total aproximado: ${viaje.costo}`);

        console.log(`-------------------------------`);
    });
};