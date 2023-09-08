const crearYClasificarPadawan = (nombre, planeta, edad, estatura) => {
    const padawan = { nombre, planeta, edad, estatura };
    clasificarActividad(padawan);
}

const clasificarActividad = (padawan) => {
    if (padawan.edad < 15) {
        console.log(`${padawan.nombre} del planeta ${padawan.planeta} debe manejar la fuerza.`);
    } else {
        console.log(`${padawan.nombre} del planeta ${padawan.planeta} debe manejar el sable de luz.`);
    }
}

crearYClasificarPadawan("Anakin Skywalker", "Tatooine", 9, 160);
crearYClasificarPadawan("Ahsoka Tano", "Shili", 17, 175);
