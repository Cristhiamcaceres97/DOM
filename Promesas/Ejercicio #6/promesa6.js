/*Crea una función llamada uploadFile que tome 
un nombre de archivo y una promesa de File como 
argumentos, y devuelva una promesa que resuelva 
con una URL de descarga del archivo subido al servidor.  */

function getFile(fileInput) {
  return new Promise((resolve, reject) => {
  
  });
}

function uploadFile(fileName, filePromise) {
  return new Promise((resolve, reject) => {
    filePromise
      .then((file) => {
        setTimeout(() => {
          let downloadUrl = "https://www.fontpair.co/" + fileName;
          resolve(downloadUrl);
        }, 2000);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

let fileInput = document.getElementById("file-input");
let filePromise = getFile(fileInput);

uploadFile("my-file.txt", filePromise)
  .then((url) => {
    console.log(url);
  })
  .catch((error) => {
    console.error(error);
  });