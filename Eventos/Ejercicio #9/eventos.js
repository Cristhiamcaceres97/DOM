const boton = document.getElementById("boton");
const elementoEliminar = document.getElementById("eliminar");


boton.addEventListener("click", function() {
  
  const confirmacion = confirm("¿Estás seguro de que deseas eliminarlo?");

 
  if (confirmacion) {
    elementoEliminar.remove();
  }
});

