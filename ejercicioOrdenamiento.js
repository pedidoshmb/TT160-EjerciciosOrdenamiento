let arreglo = [2, 5, 7, 16, 4, 1];

// Ordenamiento por selección
for (let j = 0; j < arreglo.length; j++) {
  let datoMin = arreglo[j];
  let posMin = j;

  // Buscar el mínimo en el resto del arreglo
  for (let i = j + 1; i < arreglo.length; i++) {
    if (datoMin > arreglo[i]) {
      datoMin = arreglo[i];
      posMin = i;
      console.log("Nuevo mínimo:", datoMin, "en posición:", posMin);
    }
  }

  // Intercambiar valores
  let temp = arreglo[j];
  arreglo[j] = arreglo[posMin];
  arreglo[posMin] = temp;

  console.log("Arreglo después del recorrido", j + 1, ":", arreglo);
}
console.log("Otro ejercicio:");

// ordenamiento por nombres
let nombres = ["Juan", "Ana", "Pedro", "María", "Luis"];
nombres.sort();
console.log("Nombres ordenados alfabéticamente:", nombres);
