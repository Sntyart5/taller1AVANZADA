const contarSablesDefectuosos = (energias) => energias.filter(energia => energia < 0).length;

const energiasSables = [2, 4, -8, 5, -6];
const cantidadDefectuosos = contarSablesDefectuosos(energiasSables);

console.log(`La cantidad de sables defectuosos es: ${cantidadDefectuosos}`);
