// Datos de los 15 mapas de planetas
const mapasPlanetas = [
    { nombrePlaneta: "Tatooine", latitud: 25, longitud: 30, oxigeno: 0.7, agua: 1000 },
    { nombrePlaneta: "Alderaan", latitud: 40, longitud: 60, oxigeno: 1, agua: 2000 },
    { nombrePlaneta: "Hoth", latitud: -60, longitud: 150, oxigeno: 0.1, agua: 100 },
    { nombrePlaneta: "Endor", latitud: 35, longitud: 140, oxigeno: 0.9, agua: 800 },
    { nombrePlaneta: "Naboo", latitud: 30, longitud: 75, oxigeno: 0.8, agua: 1500 },
    { nombrePlaneta: "Kashyyyk", latitud: -15, longitud: 100, oxigeno: 0.9, agua: 1200 },
    { nombrePlaneta: "Coruscant", latitud: 0, longitud: 0, oxigeno: 1, agua: 500 },
    { nombrePlaneta: "Kamino", latitud: -20, longitud: 45, oxigeno: 0.9, agua: 3000 },
    { nombrePlaneta: "Geonosis", latitud: -40, longitud: 60, oxigeno: 0.2, agua: 50 },
    { nombrePlaneta: "Dagobah", latitud: -50, longitud: 110, oxigeno: 0.6, agua: 300 },
    { nombrePlaneta: "Bespin", latitud: 0, longitud: 90, oxigeno: 0.5, agua: 10 },
    { nombrePlaneta: "Mustafar", latitud: -45, longitud: 75, oxigeno: 0.3, agua: 0 },
    { nombrePlaneta: "Kessel", latitud: 15, longitud: 120, oxigeno: 0.6, agua: 200 },
    { nombrePlaneta: "Jakku", latitud: 30, longitud: 40, oxigeno: 0.4, agua: 50 },
    { nombrePlaneta: "Sullust", latitud: -10, longitud: 160, oxigeno: 0.7, agua: 20 }
];


// Función convencional para realizar las operaciones
function realizarOperaciones(mapasPlanetas) {
    let totalAgua = 0;
    let totalOxigeno = 0;

    let planetaOxigenoNegativo = null;
    let planetaSinAgua = null;

    mapasPlanetas.forEach(planeta => {
        totalAgua += planeta.agua;
        totalOxigeno += planeta.oxigeno;

        if (planeta.oxigeno < 0) {
            planetaOxigenoNegativo = planeta;
        }

        if (planeta.agua === 0) {
            planetaSinAgua = planeta;
        }
    });

    totalOxigeno *= 100;

    return { totalAgua, totalOxigeno, planetaOxigenoNegativo, planetaSinAgua };
}

// Ejemplo de uso
const resultado = realizarOperaciones(mapasPlanetas);

console.log(`Total de agua de los 15 planetas: ${resultado.totalAgua}`);
console.log(`Total de oxígeno multiplicado por 100: ${resultado.totalOxigeno}`);
if (resultado.planetaOxigenoNegativo) {
    console.log(`Planeta con oxígeno negativo: ${resultado.planetaOxigenoNegativo.nombrePlaneta}`);
    console.log(resultado.planetaOxigenoNegativo);
}
if (resultado.planetaSinAgua) {
    console.log(`Planeta sin agua: ${resultado.planetaSinAgua.nombrePlaneta}`);
    console.log(resultado.planetaSinAgua);
}
