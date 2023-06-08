var btn = document.getElementById("btn");
var result = document.getElementById("resultado");


function getData() {
return new Promise(function(resuelve, reject) {
setTimeout(function() {
var data = {
nombre: "Cristhiam",
edad: 26,
ocupacion: "Programador"
};
resuelve(data);
}, 3000);
});
}


btn.addEventListener("click", function() {

getData()
.then(function(data) {

result.textContent = "Los datos son: " + JSON.stringify(data);
})
.catch(function(error) {

result.textContent = "Ha ocurrido un error: " + error;
});
});