// Datos de los 15 mapas de planetas
const mapasPlanetas = [
    { nombrePlaneta: "Tatooine", latitud: 25, longitud: 30, oxigeno: 0.7, agua: 1000 },
    // ... Agrega los datos de los otros 14 planetas aquí ...
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
