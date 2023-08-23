// Función de flecha para encontrar el número más cercano a cero
const encontrarNumeroCercanoCero = (numeros) => numeros.reduce((numeroCercano, numero) =>
    Math.abs(numero) < Math.abs(numeroCercano) ? numero : numeroCercano
);

// Ejemplo de uso
const numeros = [2, -4, 6, -8, 10, -12, 14, -16, 18, -20]; // Cambia estos valores según tus números
const numeroCercanoCero = encontrarNumeroCercanoCero(numeros);

console.log(`El número más cercano a cero es: ${numeroCercanoCero}`);
