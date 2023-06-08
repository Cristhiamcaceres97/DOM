
document.addEventListener("DOMContentLoaded", function(event) {
 var boton = document.getElementById("boton");
 var mensaje = document.getElementById("mensaje");

 boton.addEventListener("click", function() {

    mensaje.textContent = "texto cambiado"
 });
});