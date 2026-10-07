let movimientos = [
    { tipo: "recarga", valor: 45000 },
    { tipo: "retiro", valor: -18200 },
    { tipo: "movimiento", valor: 0 },
    { tipo: "comercio", valor: -27600 },
    { tipo: "transferencia", valor: -12000 },
    { tipo: "comercio", valor: -34800 },
    { tipo: "recarga", valor: 65000 }
];

let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {

    if (movimientos[i].valor === 0) {
        continue;
    }

    if (movimientos[i].tipo === "comercio") {
        posicionEncontrada = i;
        console.log("Primer pago a comercio encontrado en la posición:", posicionEncontrada);
        break;
    }
}