const prompt = require('prompt-sync')();

let opcion;

do {
    console.log("\n--- MENÚ NEQUI ---");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

    opcion = prompt("Selecciona una opción: ");

    if (opcion === "1") {
        console.log("Has seleccionado ver saldo.");
    } else if (opcion === "2") {
        console.log("Has seleccionado enviar dinero.");
    } else if (opcion === "3") {
        console.log("Has seleccionado recargar.");
    } else if (opcion === "4") {
        console.log("Saliendo de Nequi...");
    } else {
        console.log("Opción no válida.");
    }

} while (opcion !== "4");
