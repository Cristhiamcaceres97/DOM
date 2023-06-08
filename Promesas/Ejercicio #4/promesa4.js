/*Crea una función llamada login que tome 
un nombre de usuario y una contraseña como 
argumentos, y devuelva una promesa que resuelva 
con true si las credenciales son válidas, o 
false en caso contrario. */


function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let validUsers = {
                "mario" : "1234",
                "andres" : "5678",
                "saidy" : "9101"
            };
            let isValid = validUsers[username] === password;
            resolve(isValid);
        }, 1000);
    });
}

login("andres", "5678")
.then((result) => {
    console.log(result);
});

login("andres", "1234")
.then((result) => {
    console.log(result);
});
