document.addEventListener("DOMContentLoaded", function(event) {
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        var nombre = document.getElementById("nombre").value;
        alert("nombre : " + nombre);
    });
});