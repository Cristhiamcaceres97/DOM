/*Crea una función llamada getUserData que tome 
un ID de usuario como argumento y devuelva una 
promesa que resuelva con el objeto de datos del 
usuario con ese ID (puedes simular la respuesta 
de una API externa usando getData). */

function getData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = [
        { id: 1, name: "andres", email: "andres@gmail.com" },
        { id: 2, name: "saidy", email: "saidy@gmail.com" },
        { id: 3, name: "cristhiam", email: "paco@gmail.com" },
      ];
      let user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(new error("usuario no encontrado"));
      }
    }, 2000);
  });
}

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    getData(userId)
      .then((user) => {
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getUserData(10)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
