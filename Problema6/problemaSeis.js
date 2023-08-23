// Función convencional para clasificar edades y contar repeticiones
function clasificarEdades(edades, codigos) {
    const edadesContadas = {};
    let mayorEdad = -1;
    let repeticionesMayorEdad = 0;

    for (let i = 0; i < edades.length; i++) {
        const edad = edades[i];
        const codigo = codigos[i];

        if (!edadesContadas[edad]) {
            edadesContadas[edad] = 1;
        } else {
            edadesContadas[edad]++;
        }

        if (edad > mayorEdad) {
            mayorEdad = edad;
            repeticionesMayorEdad = 1;
        } else if (edad === mayorEdad) {
            repeticionesMayorEdad++;
        }
    }

    return { mayorEdad, repeticionesMayorEdad, edadesContadas };
}

// Generar edades y códigos aleatoriamente para el ejemplo
const edadesAleatorias = [25, 30, 22, 25, 35, 22, 30, 40, 25, 35, 30, 22, 40, 25, 22, 30, 35, 40, 22, 35];
const codigosAleatorios = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'AAA', 'DDD', 'BBB', 'EEE', 'CCC', 'AAA', 'CCC', 'DDD', 'EEE', 'BBB', 'AAA', 'EEE', 'DDD', 'BBB', 'CCC'];

const resultado = clasificarEdades(edadesAleatorias, codigosAleatorios);

console.log(`La mayor edad es ${resultado.mayorEdad}, se repite ${resultado.repeticionesMayorEdad} veces.`);
console.log(`Conteo de edades:`);
for (const edad in resultado.edadesContadas) {
    console.log(`${edad}: ${resultado.edadesContadas[edad]} veces.`);
}
