/*Implementa una función llamada cuadradosNumeros que
recibe una lista de números llamada numeros.
La función debe calcular el cuadrado de cada número de la
lista y retorna una promesa que se resuelve con una lista de
objetos. Cada objeto debe tener dos propiedades: número (el
número original) y cuadrado (el cuadrado del número).
Si la lista de números está vacía, la promesa debe ser
rechazada con un mensaje de error. */

async function cuadradosNumeros(numeros) {
  if (numeros.length === 0) {
    throw new Error("La lista de números está vacía");
  }

  const cuadrados = numeros.map((num) => {
    const cuadrado = num * num;
    return { numero: num, cuadrado: cuadrado };
  });

  return cuadrados;
}

function calcularCuadrados() {
  const numeros = [1, 2, 3, 4, 5];

  const resultado = document.getElementById("resultado");

  cuadradosNumeros(numeros)
    .then((cuadrados) => {
      const formattedResult = cuadrados
        .map((obj) => `${obj.numero} : ${obj.cuadrado}`)
        .join(", ");
      resultado.textContent = formattedResult;
    })
    .catch((error) => {
      resultado.textContent = "Error: " + error.message;
    });
}
