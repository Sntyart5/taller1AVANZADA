function contarSablesDefectuosos(energias) {
    let cantidadDefectuosos = 0;
    
    for (let i = 0; i < energias.length; i++) {
        if (energias[i] < 0) {
            cantidadDefectuosos++;
        }
    }
    
    return cantidadDefectuosos;
}

const energiasSables = [2, 4, -8, 5, -6];
const cantidadDefectuosos = contarSablesDefectuosos(energiasSables);

console.log(`La cantidad de sables defectuosos es: ${cantidadDefectuosos}`);
