/*Crea una función llamada getUsers que devuelva 
una promesa que resuelva con una lista de objetos 
de usuarios (puedes simular la respuesta de una 
API externa usando getData). */

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "paco" },
        { id: 2, name: "andres" },
        { id: 3, name: "saidy" },
      ];
      resolve(users);
    }, 1000);
  });
}

getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log("error : ", error);
  });
