const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");

    imagen.addEventListener("mouseover", function() {

      descripcion.style.display = "block";
     
      descripcion.textContent = "Estos son los villanos de flash";
    });

    imagen.addEventListener("mouseout", function() {
     
      descripcion.style.display = "none";
    });
 