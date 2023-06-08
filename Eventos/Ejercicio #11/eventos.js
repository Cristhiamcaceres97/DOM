
document.addEventListener('DOMContentLoaded', function() {
    const imagen = document.getElementById('imagen');
    const mensaje = document.getElementById('mensaje');

    imagen.addEventListener('dragstart', function(event) {
      mensaje.textContent = 'Arrastrando la imagen...';
    });

    imagen.addEventListener('dragend', function(event) {
      mensaje.textContent = 'Imagen arrastrada.';
    });
  });