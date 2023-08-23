// Simulación de datos de alimentos
const alimentos = [
    { nombre: "Zanahoria", tipo: "vegetal", energia: 250 },
    { nombre: "Pescado", tipo: "animal", energia: 300 },
    // ... Agrega los datos de los otros 298 alimentos aquí ...
];

// Función convencional para filtrar alimentos y calcular la sumatoria
function filtrarYCalcularSumatoria(alimentos) {
    setTimeout(function() {
        const alimentosVegetales = alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.energia > 200);
        const sumatoriaEnergiaVegetales = alimentosVegetales.reduce((sum, alimento) => sum + alimento.energia, 0);
        
        console.log(`Alimentos vegetales con más de 200 unidades de energía:`);
        console.log(alimentosVegetales);
        console.log(`Sumatoria de energía de alimentos vegetales: ${sumatoriaEnergiaVegetales}`);
    }, 5000);
}

// Ejemplo de uso
filtrarYCalcularSumatoria(alimentos);
