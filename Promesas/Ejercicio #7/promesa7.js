/*Crea una función llamada getWeather que tome una ciudad 
como argumento, y devuelva una promesa que resuelva
con el objeto de tiempo actual para esa ciudad 
(puedes simular la respuesta de una API externa usando getData). */

async function getData(city) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const data = {
    city: city,
    temperatura: "37",
    descripcion: "soleado",
  };

  return data;
}

async function getWeather(city) {
  try {
    const weatherData = await getData(city);
    return weatherData;
  } catch (error) {
    throw new Error("No se pudo obtener el tiempo actual");
  }
}

async function consultarTiempo() {
  const city = document.getElementById("city").value;

  try {
    const weather = await getWeather(city);

    document.getElementById(
      "Resultado"
    ).textContent = `Tiempo en ${weather.city}: ${weather.temperatura}°C, ${weather.descripcion}`;
  } catch (error) {
    document.getElementById("Resultado").textContent = error.message;
  }
}
