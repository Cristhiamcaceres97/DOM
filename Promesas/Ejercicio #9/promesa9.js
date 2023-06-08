/*Crea una función llamada getDirections que tome un origen 
y un destino como argumentos, y devuelva una promesa que 
resuelva con un objeto de instrucciones de navegación 
(puedes simular la respuesta de una API externa usando getData). */

function getData(origin, destination) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const directions = {
        origin: origin,
        destination: destination,
        instructions: "Sigue recto por 5 km y luego gira a la izquierda.",
      };
      resolve(directions);
    }, 1000);
  });
}

function getDirections(origin, destination) {
  return new Promise((resolve, reject) => {
    getData(origin, destination)
      .then((directions) => {
        resolve(directions);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function handleGetDirections() {
  const originInput = document.getElementById("originInput").value;
  const destinationInput = document.getElementById("destinationInput").value;
  const directionsOutput = document.getElementById("directionsOutput");

  getDirections(originInput, destinationInput)
  .then((directions) => {
    directionsOutput.innerHTML = "Origen: " + directions.origin + "<br>Destino: " + directions.destination + "<br>Instrucciones: " + directions.instructions;
  })

    .catch((error) => {
      console.error("Error al obtener las direcciones: ", error);
    });
}
