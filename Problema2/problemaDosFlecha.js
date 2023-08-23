// Datos de los códigos de acceso y nombres de pilotos
const codigosAcceso = [
    "ARQ2555: Sara Bel-Sun",
    "ARQ2556: Nodin Chavdri",
    "ARQ2557: Finn"
];

// Función para extraer y mostrar los nombres de pilotos
const mostrarNombresPilotos = (codigosAcceso) => {
    codigosAcceso.forEach((codigo) => {
        const [codigoNave, nombrePiloto] = codigo.split(": ");
        console.log(`Código de Nave: ${codigoNave}, Piloto: ${nombrePiloto}`);
    });
};

// Llamar a la función con los datos de los códigos de acceso
mostrarNombresPilotos(codigosAcceso);
