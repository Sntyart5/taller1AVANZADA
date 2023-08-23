// Datos de los códigos de acceso y nombres de pilotos
const codigosAcceso = [
    "ARQ2555: Sara Bel-Sun",
    "ARQ2556: Nodin Chavdri",
    "ARQ2557: Finn"
];

// Función convencional para extraer y mostrar los nombres de pilotos
function mostrarNombresPilotos(codigosAcceso) {
    codigosAcceso.forEach(function(codigo) {
        const partes = codigo.split(": ");
        const codigoNave = partes[0];
        const nombrePiloto = partes[1];
        console.log(`Código de Nave: ${codigoNave}, Piloto: ${nombrePiloto}`);
    });
}

// Llamar a la función con los datos de los códigos de acceso
mostrarNombresPilotos(codigosAcceso);
