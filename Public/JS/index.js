function calcularInteresCompuesto(capitalInicial, tasaInteresAnual, años) {
    let capitalFinal = capitalInicial;
  
    for (let i = 1; i <= años; i++) {
      
      capitalFinal += capitalFinal * (tasaInteresAnual / 100);
  
      let deposito = Number(prompt("Ingresa los depósitos adicionales para el año " + i + " (si no hay, ingresa 0):"));
      
      if (deposito > 0) {
        capitalFinal += deposito;
      }
  
      console.log("Año " + i + ": Capital acumulado: $" + capitalFinal);
    }
  
    return capitalFinal;
  }
  
  let capitalInicial = Number(prompt("Ingresa el capital inicial:"));
  let tasaInteresAnual = Number(prompt("Ingresa el interés anual (%):"));
  let años = Number(prompt("Ingresa la cantidad de años:"));
  
  let capitalFinal = calcularInteresCompuesto(capitalInicial, tasaInteresAnual, años);
  
  console.log("El capital final después de " + años + " años es: $" + capitalFinal);
