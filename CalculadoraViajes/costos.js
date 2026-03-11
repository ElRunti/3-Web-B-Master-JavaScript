const COSTO_DESTINO ={
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Madrid: 350,
    Tokyo: 700
}

const COSTO_TRASNPORTE = {
    Tren: 100,
    Autobus: 60,
    Avion: 200,
};

const COSTOS_ALOJAMIENTO_POR_NOCHE ={
    Hotel: 90,
    Hostal: 30,
    Airbnb: 30,
};
export const CalcularCosto =({
    destino,
    transporte,
    alojamiento,
    noches = 0,
    personas = 1,
}) =>{
    const baseDestino = COSTO_DESTINO[destino] ?? 0;
    const extraTransporte = COSTO_TRASNPORTE[transporte] ?? 0;
    const costoNoche = COSTOS_ALOJAMIENTO_POR_NOCHE[alojamiento]?? 0;
    let subtotal = (baseDestino + extraTransporte) * personas;
    // Sumamos el costo del alojamiento
    // noches * precio por noche
    subtotal += noches * costoNoche;

    // Usando operador ternario = condicion ? valor si es true : valor si es false
    const descuento =
    personas >= 5 ? 0.12 : // 12% de descuento
    personas >= 3 ? 0.07 : // 7 % de descuento
    0;// sin descuento

    // Aplicando el descuento al subtotal
    const total = subtotal * (1 - descuento);

    //Redondear el resultadi
    return Math.round(total);
}

