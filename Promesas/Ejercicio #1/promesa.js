var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
var result = document.getElementById("result");

// Crear la función sum que devuelve una promesa
function sum(a, b) {
return new Promise(function(resolve, reject) {
if (typeof a === "number" && typeof b === "number") {
resolve(a + b);
} else {
reject("Los argumentos deben ser números");
}
});
}

// Añadir un evento al botón para llamar a la función sum
btn.addEventListener("click", function() {
// Obtener los valores de los inputs y convertirlos a números
var a = Number(num1.value);
var b = Number(num2.value);
// Llamar a la función sum y manejar la promesa
sum(a, b)
.then(function(value) {
// Si la promesa se resuelve, mostrar el resultado en el párrafo
result.textContent = "La suma es: " + value;
})
.catch(function(error) {
// Si la promesa se rechaza, mostrar el error en el párrafo
result.textContent = "Ha ocurrido un error: " + error;
});
});