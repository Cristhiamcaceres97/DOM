/*Implementa una función llamada obtenerInformacion que
reciba un parámetro llamado id que representa el
identificador de un usuario en una API externa.
La función debe hacer una llamada a la API externa para
obtener la información del usuario con el identificador
especificado en el parámetro id.
Si la llamada a la API es exitosa, la función debe retornar una
promesa que se resuelve con la información del usuario.
Si la llamada a la API es fallida, la función debe retornar una
promesa que se rechaza con un mensaje de error. */

async function obtenerInformacion(id) {
    return new Promise((resolve, reject) => {
      const usuarios = {
        usuario1: {
          name: "Paco",
          age: 26,
          public: 10,
        },
        usuario2: {
          name: "Andres",
          age: 22,
          public: 5,
        },
        usuario3: {
          name: "Cristhiam",
          age: 29,
          public: 2,
        },
        usuario4: {
          name: "Camilo",
          age: 18,
          public: 7,
        },
        usuario5: {
          name: "Esmeralda",
          age: 20,
          public: 3,
        },
      };
  
      if (usuarios[id]) {
        resolve(usuarios[id]);
      } else {
        reject("Usuario no encontrado");
      }
    });
  }
  
  function obtenerInformacionUsuario() {
    const input = document.getElementById("inputUsuario");
    const resultado = document.getElementById("resultado");
  
    const usuarioId = input.value;
  
    if (!usuarioId) {
      resultado.textContent = "Ingresa un usuario válido";
      return;
    }
  
    obtenerInformacion(usuarioId)
      .then(usuario => {
        const usuarioInfo = `
          Nombre: ${usuario.name}\nEdad: ${usuario.age}\n Público: ${usuario.public}\n
        `;
        resultado.textContent = usuarioInfo;
      })
      .catch(error => {
        resultado.textContent = "Error: " + error;
      });
  }
  