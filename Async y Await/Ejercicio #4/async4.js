/*Implementa una función llamada calcular que reciba dos
parámetros numéricos llamados a y b, y otro parámetro de
tipo string llamado operacion que representa la operación
matemática que se desea realizar (puede ser "suma", "resta",
"multiplicacion", o "division").
La función debe retornar una promesa que se resuelve con el
resultado de la operación matemática entre a y b, de acuerdo
con el valor del parámetro operacion.
Si el parámetro operacion no tiene un valor válido, la promesa
debe ser rechazada con un mensaje de error. */

function calcular() {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const selectOperacion = document.getElementById("selectOperacion");
  const resultado = document.getElementById("resultado");

  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operacion = selectOperacion.value;

  if (!isNaN(a) && !isNaN(b)) {
    calcularOperacion(a, b, operacion)
      .then((res) => {
        resultado.textContent = "Resultado: " + res;
      })
      .catch((error) => {
        resultado.textContent = "Error: " + error;
      });
  } else {
    resultado.textContent = "Ingresa valores numéricos válidos";
  }
}

async function calcularOperacion(a, b, operacion) {
  return new Promise((resolve, reject) => {
    if (operacion === "suma") {
      resolve(a + b);
    } else if (operacion === "resta") {
      resolve(a - b);
    } else if (operacion === "multiplicacion") {
      resolve(a * b);
    } else if (operacion === "division") {
      if (b !== 0) {
        resolve(a / b);
      } else {
        reject("La división por cero no está permitida");
      }
    } else {
      reject("Operación inválida");
    }
  });
}
