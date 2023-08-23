// Función convencional para crear un objeto Padawan y clasificar su actividad
function crearYClasificarPadawan(nombre, planeta, edad, estatura) {
    const padawan = { nombre, planeta, edad, estatura };
    clasificarActividad(padawan);
}

// Función convencional para clasificar la actividad de un Padawan
function clasificarActividad(padawan) {
    if (padawan.edad < 15) {
        console.log(`${padawan.nombre} del planeta ${padawan.planeta} debe manejar la fuerza.`);
    } else {
        console.log(`${padawan.nombre} del planeta ${padawan.planeta} debe manejar el sable de luz.`);
    }
}

// Ejemplo de uso
crearYClasificarPadawan("Anakin Skywalker", "Tatooine", 9, 160);
crearYClasificarPadawan("Ahsoka Tano", "Shili", 17, 175);
