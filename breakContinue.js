/*
Break
La sentencia Break nos sirve para salir de bloques de tipo Switch, pero tambien nos sirve para forzar la salida de un ciclo.
*/

// const nombres = [
//     "Arturo",
//     "Andres",
//     "Alejandro",
//     "Raul",
//     "Adrian",
//     "Antonio",
//     "Angel",
// ];

// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i][0] !== "A") {
//         console.log("ALTO! Hay un nombre que no commienza con la letra A");
//         console.log(nombres[i] + " no empieza con la letra A");
//         break;
//     }

//     console.log(nombres[i]);
// };

/*
Continue
La sentencia Continue nos sirve para saltar a la siguiente iteración.
*/

const invitados = [
    "Carlos",
    "Christian",
    "Christofer",
    "Jorge",
    "Estefania",
    "Erika",
    "Manuel",
];
console.log("Lista de personas invitadas:");

for (let i = 0; i < invitados.length; i++) {
    if (invitados[i] === "Jorge") {
        continue;
    }
    console.log(invitados[i]);
}
