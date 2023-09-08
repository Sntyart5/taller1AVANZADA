const calcularDistancia = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const xNaboo = 5;  // Coordenada X de NABOO
const yNaboo = 8;  // Coordenada Y de NABOO

const xOtroPlaneta = 2;  // Coordenada X del otro planeta
const yOtroPlaneta = 3;  // Coordenada Y del otro planeta

const distanciaEntrePlanetas = calcularDistancia(xNaboo, yNaboo, xOtroPlaneta, yOtroPlaneta);

console.log(`La distancia entre NABOO y el otro planeta es: ${distanciaEntrePlanetas} UA`);
