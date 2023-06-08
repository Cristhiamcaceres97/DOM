/*Implementa una función llamada comparar que reciba dos
 parámetros numéricos llamados a y b. 
Si a es mayor que b, la función debe retornar una promesa
que se resuelve con el valor "a es mayor que b".
Si b es mayor que a, la función debe retornar una promesa
que se resuelve con el valor "b es mayor que a".
Si a y b son iguales, la función debe retornar una promesa que
se rechaza con el valor "a y b son iguales".*/

async function comparar(a, b) {
  if (a > b) {
    return "a es mayor que b";
  } else if (b > a) {
    return "b es mayor que a";
  } else {
    throw new Error("a y b son iguales");
  }
}

function realizarComparacion() {
  const a = 5;
  const b = 10;

  const resultado = document.getElementById("resultado");

  comparar(a, b)
    .then((valor) => {
      resultado.textContent = valor;
    })
    .catch((error) => {
      resultado.textContent = "Error: " + error.message;
    });
}
