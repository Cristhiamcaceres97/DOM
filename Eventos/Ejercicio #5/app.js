const boton = document.getElementById("boton-li");
const lista = document.getElementById("lista");


boton.addEventListener("click", function() {
  
  const nuevoElemento = document.createElement("li");
 
  nuevoElemento.textContent = "I like apple";
  
  lista.appendChild(nuevoElemento);
});