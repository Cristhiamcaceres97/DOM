/* Implementa una función llamada tamanioTotalRespuestas
que recibe una lista de URLs llamada urls.
La función debe realizar una petición HTTP a cada URL y sumar
el tamaño en bytes de las respuestas.
La función debe retornar una promesa que se resuelve con el
tamaño total en bytes de las respuestas. */

async function tamanioTotalRespuestas(urls) {
  let totalSize = 0;

  for (const url of urls) {
    const response = await simularPeticionHTTP(url);
    const data = await response.blob();
    totalSize += data.size;
  }

  return totalSize;
}

function simularPeticionHTTP(url) {
  const responses = {
    "https://google.com/url1": { size: 1024 },
    "https://facebook.com/url2": { size: 2048 },
    "https://garmincol.com/url3": { size: 512 },
  };

  if (responses[url]) {
    return Promise.resolve({
      blob: () => Promise.resolve({ size: responses[url].size }),
    });
  } else {
    return Promise.reject("Error: URL no encontrada");
  }
}

function calcularTamanioTotalRespuestas() {
  const urls = [
    "https://google.com/url1",
    "https://facebook.com/url2",
    "https://garmincol.com/url3",
  ];

  const resultado = document.getElementById("resultado");

  tamanioTotalRespuestas(urls)
    .then((tamanio) => {
      resultado.textContent =
        "Tamaño Total de Respuestas: " + tamanio + " bytes";
    })
    .catch((error) => {
      resultado.textContent = "Error: " + error;
    });
}
