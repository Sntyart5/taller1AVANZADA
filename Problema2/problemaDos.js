const codigosAcceso = [
    "ARQ2555: Sara Bel-Sun",
    "ARQ2556: Nodin Chavdri",
    "ARQ2557: Finn"
];

function mostrarNombresPilotos(codigosAcceso) {
    codigosAcceso.forEach(function(codigo) {
        const partes = codigo.split(": ");
        const codigoNave = partes[0];
        const nombrePiloto = partes[1];
        console.log(`Código de Nave: ${codigoNave}, Piloto: ${nombrePiloto}`);
    });
}

mostrarNombresPilotos(codigosAcceso);
