
document.addEventListener("DOMContentLoaded", function() {
  const elemento1 = document.getElementById("ítem1");
  const elementos = document.querySelectorAll(".activo");

  elemento1.addEventListener("click", function() {
    elementos.forEach(function(elemento) {
      elemento.classList.remove("activo");
    });

    this.classList.add("activo");
  });
});
