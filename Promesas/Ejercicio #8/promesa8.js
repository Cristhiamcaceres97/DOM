/*Crea una función llamada translate que tome un 
texto y un idioma de destino como argumentos, y 
devuelva una promesa que resuelva con el texto 
traducido al idioma de destino (puedes simular 
la respuesta de una API externa usando getData). */

function getData(Text, Language) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const translations = {
        english: "hello",
        spanish: "hola",
        french: "Bonjour",
      };
      resolve(translations[Language]);
    }, 1000);
  });
}

function translate(text, language) {
  return new Promise((resolve, reject) => {
    getData(text, language)
      .then((translation) => {
        resolve(translation);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function handleTranslation() {
  const inputText = document.getElementById("inputText").value;
  const selectLanguage = document.getElementById("selectlanguage").value;
  const outputText = document.getElementById("outputText");

  translate(inputText, selectLanguage)
    .then((translation) => {
      outputText.textContent = translation;
    })
    .catch((error) => {
      console.error("translation error: ", error);
    });
}
