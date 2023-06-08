/* Crea una función llamada getUserInfo que tome un ID de usuario 
como argumento y devuelva una promesa que resuelva con un objeto 
que contenga la siguiente información del usuario: nombre, 
correo electrónico, edad, ciudad de residencia y los últimos 5 tweets 
del usuario (usando el nombre de usuario).
Para resolver este ejercicio, debes crear varias funciones que devuelvan 
promesas para obtener cada una de las piezas de información del usuario:

1. Crea una función llamada getUserData que tome un ID de usuario como 
argumento y devuelva una promesa que resuelva con un objeto de datos del 
usuario con ese ID (puedes simular la respuesta de una API externa usando setTimeout).


2. Crea una función llamada getUserTweets que tome un nombre de usuario 
como argumento y devuelva una promesa que resuelva con una lista de los últimos 
5 tweets del usuario (puedes simular la respuesta de una API externa usando setTimeout).


3. Crea una función llamada getUserAge que tome una fecha de nacimiento como argumento 
y devuelva una promesa que resuelva con la edad del usuario en años (puedes calcular la edad 
usando la fecha actual).


4. Utiliza las funciones anteriores dentro de getUserInfo para obtener la información 
del usuario, y devuelve un objeto con toda la información obtenida. */

function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = {
        name: "Paco Caceres",
        email: "paco@example.com",
        city: "cucuta",
      };
      resolve(userData);
    }, 1000);
  });
}

function getUserTweets(username) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const tweets = [
          "Mi gato se llama Bills.",
          "Quiero viajar por el mundo.",
          "¿Qué tal el nuevo Spiderman? 🕷️",
          "Amo el Mani.",
          "Hoy me siento muy feliz."
        ];
        resolve(tweets);
      }, 1500);
    });
  }
  

function getUserAge(dateOfBirth) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentDate = new Date();
      const birthDate = new Date(dateOfBirth);
      const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
      resolve(ageInYears);
    }, 2000);
  });
}

function getUserInfo(userId) {
  return new Promise((resolve, reject) => {
    getUserData(userId)
      .then((userData) => {
        return Promise.all([
          userData,
          getUserTweets(userData.name),
          getUserAge("1997-01-06"), 
        ]);
      })
      .then(([userData, tweets, age]) => {
        const userInfo = {
          name: userData.name,
          email: userData.email,
          city: userData.city,
          tweets: tweets,
          age: age,
        };
        resolve(userInfo);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function handleGetUserInfo() {
  const userIdInput = document.getElementById("userIdInput").value;
  const userInfoOutput = document.getElementById("userInfoOutput");

  getUserInfo(userIdInput)
    .then((userInfo) => {
      userInfoOutput.innerHTML = `
          <h2>Información del usuario</h2>
          <p><strong> Nombre:</strong> ${userInfo.name}</p>
          <p><strong> Email:</strong> ${userInfo.email}</p>
          <p><strong> Ciudad:</strong> ${userInfo.city}</p>
          <p><strong> Edad:</strong> ${userInfo.age} años</p>
          <h3>Últimos 5 tweets:</h3>
          <ul>${userInfo.tweets
            .map((tweet) => `<li>${tweet}</li>`)
            .join("")}</ul>
        `;
    })
    .catch((error) => {
      console.error("Error al obtener información del usuario: ", error);
    });
}
