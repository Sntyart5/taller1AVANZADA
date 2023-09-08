const calcularSalarioMensual = (ventasLicencias) => {
    const salarioBase = 3500000;
    const comisionPorVenta = 1500000;
    const deducciones = 0.05;

    const comisionTotal = comisionPorVenta * ventasLicencias;
    const salarioAntesDeducciones = salarioBase + comisionTotal;
    const salarioFinal = salarioAntesDeducciones * (1 - deducciones);

    return salarioFinal;
};

const ventasLicencias = 3; // Cambia este valor según las ventas del vendedor
const salarioMensual = calcularSalarioMensual(ventasLicencias);

console.log(`El salario mensual del vendedor es: ${salarioMensual}`);
