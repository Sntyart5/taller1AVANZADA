// Función convencional para calcular la temperatura media
function calcularTemperaturaMedia(tempMaxima, tempMinima) {
    return (tempMaxima + tempMinima) / 2;
}

// Ejemplo de uso
const temperaturaMaxima = 28;
const temperaturaMinima = 15;
const temperaturaMedia = calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima);

console.log(`La temperatura media es: ${temperaturaMedia} grados Celsius`);
