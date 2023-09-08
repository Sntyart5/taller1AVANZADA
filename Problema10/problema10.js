// Declaración de la variable alimentos

let alimentos = [
    {
      nombre: "лпфц",
      tipo: "Vegetal",
      nivelEnergia: 200,
    },
  ];
  
  // Función para generar un nombre aleatorio
  let generarNombre = (longitud) => {
    let chars = "лпфцщъюя";
    let charLength = chars.length; //Esto se hace para evitar tener que calcular la longitud en cada iteración del bucle.
    let nombre = "";
    for (let i = 0; i < longitud; i++) {
      nombre += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return nombre;
  };
  
  // Función para generar un tipo de alimento aleatorio
  let generarAlimento = () => {
    let tipos = ["Animal", "Vegetal", "Insecto"];
    let num = Math.floor(Math.random() * 3);
    return tipos[num];
  };
  
  // Función para generar un nivel de energía aleatorio entre 100 y 500
  let generarNumero = () => {
    let energia = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    return energia;
  };
  
  // Generar y agregar 300 alimentos aleatorios al arreglo alimentos
  for (let i = 0; i < 300; i++) {
    let alimento = {
      nombre: generarNombre(5),
      tipo: generarAlimento(),
      nivelEnergia: generarNumero(),
    };
    alimentos.push(alimento);
  }
  
  // Función principal para filtrar alimentos y calcular la sumatoria de energía
  let principal = (secundaria) => {
    setTimeout(function () {
      let filtrado = alimentos.filter(function (alimento) {
        return alimento.tipo === "Vegetal" && alimento.nivelEnergia >= 200;
      });
      console.log(`Alimentos tipo Vegetal con más de 200 unidades de energía:`);
      console.log(filtrado);
      secundaria(filtrado);
    }, 5000);
  };
  
  principal(function (alimentosVegetales) {
    let totalEnergia = alimentosVegetales.reduce(function (sum, alimento) {
      return sum + alimento.nivelEnergia;
    }, 0);
    console.log(`Total de energía entregada por alimentos tipo Vegetal: ${totalEnergia}`);
  });

  