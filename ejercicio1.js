let movimientos = [73500, -18200, -45000, 127000, -9300, 26400];

let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
    total += movimientos[i];

    if (movimientos[i] < 0) {
        cantidadRetiros++;
    }
}

console.log("Total movido:", total);
console.log("Cantidad de retiros:", cantidadRetiros);
