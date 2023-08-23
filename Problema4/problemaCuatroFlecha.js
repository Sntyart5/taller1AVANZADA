// Función de flecha para contar sables de luz con energía negativa
const contarSablesDefectuosos = (energias) => energias.filter(energia => energia < 0).length;

// Ejemplo de uso
const energiasSables = [2, 4, -8, 5, -6];
const cantidadDefectuosos = contarSablesDefectuosos(energiasSables);

console.log(`La cantidad de sables defectuosos es: ${cantidadDefectuosos}`);
