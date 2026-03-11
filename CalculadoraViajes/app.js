import { resgitrarDestino, mostrarItinerario } from "./viajes.js";

const iniciarApp = ()=>{
    resgitrarDestino("Londres","2026-05-26","Avion",{
        alojamiento: "Hotel",
        noches: 4,
        personas: 3
});

    resgitrarDestino("Tokyo","2026-15-26","Tren",{
        alojamiento: "Hostal",
        noches: 5,
        personas: 2
});

    resgitrarDestino("Paris","2026-07-26","Avion",{
        alojamiento: "Airbnb",
        noches: 7,
        personas: 1
});

mostrarItinerario();
}

iniciarApp();