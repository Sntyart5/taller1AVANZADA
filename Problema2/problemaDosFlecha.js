const codigosAcceso = [
    "ARQ2555: Sara Bel-Sun",
    "ARQ2556: Nodin Chavdri",
    "ARQ2557: Finn"
];

const mostrarNombresPilotos = (codigosAcceso) => {
    codigosAcceso.forEach((codigo) => {
        const [codigoNave, nombrePiloto] = codigo.split(": ");
        console.log(`Código de Nave: ${codigoNave}, Piloto: ${nombrePiloto}`);
    });
};

mostrarNombresPilotos(codigosAcceso);
