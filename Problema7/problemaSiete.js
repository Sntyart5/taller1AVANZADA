// Función convencional para encontrar el número más cercano a cero
function encontrarNumeroCercanoCero(numeros) {
    let numeroCercano = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (Math.abs(numeros[i]) < Math.abs(numeroCercano)) {
            numeroCercano = numeros[i];
        }
    }

    return numeroCercano;
}

// Ejemplo de uso
const numeros = [2, -4, 6, -8, 10, -12, 14, -16, 18, -20]; // Cambia estos valores según tus números
const numeroCercanoCero = encontrarNumeroCercanoCero(numeros);

console.log(`El número más cercano a cero es: ${numeroCercanoCero}`);
