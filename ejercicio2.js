const prompt = require('prompt-sync')();

let pinCorrecto = "5831";

let intento = prompt("Escribe tu PIN: ");

while (intento !== pinCorrecto) {
    console.log("PIN incorrecto.");
    intento = prompt("Escribe tu PIN nuevamente: ");
}

console.log("Bienvenido a Nequi.");
