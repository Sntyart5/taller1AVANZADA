const calcularTemperaturaMedia = (tempMaxima, tempMinima) => (tempMaxima + tempMinima) / 2;

const temperaturaMaxima = 28;
const temperaturaMinima = 15;
const temperaturaMedia = calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima);

console.log(`La temperatura media es: ${temperaturaMedia} grados Celsius`);
