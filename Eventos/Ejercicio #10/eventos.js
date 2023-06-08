document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("select");
    var valorElement = document.getElementById("valor");

    selectElement.addEventListener("change", function() {
      valorElement.textContent = selectElement.value;
    });
  });
