let usuarios = [
    {
        nombre: "Luna",
        movimientos: [12500, -4300, -18000]
    },
    {
        nombre: "Jack",
        movimientos: [55000, -12700, -8600, 23000]
    },
    {
        nombre: "Edward",
        movimientos: [32000, -9500, 17000]
    }
];

for (let i = 0; i < usuarios.length; i++) {

    let totalUsuario = 0;

    for (let j = 0; j < usuarios[i].movimientos.length; j++) {
        totalUsuario += usuarios[i].movimientos[j];
    }

    console.log(usuarios[i].nombre + ": " + totalUsuario);
}