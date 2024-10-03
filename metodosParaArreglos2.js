/* 
.indexOf()
Obtenemos el primer index de un elemento.
Si no hay elemento nos retorna -1.
*/

const nombres = [
    "Carlos",
    123,
    "Rafael",
    "Estefania",
    "Rodrigo",
    "Rafael",
    "Gema",
    "Diana",
    "Sara",
];

// console.log(nombres.indexOf("Lucy"));

/*
.lastIndexOf()
Obtenemos el último index de un elemento.
*/

//  console.log(nombres.lastIndexOf('Rafael'))

/*
.forEach()
Nos permite ejecutar una función  por cada elemento.
*/

// nombres.forEach((nombre, index) => {
//     console.log(`Hola ${nombre} (${index})`);
// })

/*.find()
Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

// const resultado = nombres.find((nombre) => {
//     if (nombre[0] === "E") {
//         return nombre;
//     }
// });

// console.log(resultado);

/*
.map()
Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo en base a los resultados de esa función
*/

// const nombresMayusculas = nombres.map((nombre) =>nombre.toUpperCase());
// console.log(nombresMayusculas);

/*
.filter()
Nos permite ejecutar una función por cada elemento y luego crear un arreglo en base a los resultados de esa función.
*/

// const nombre4Letras = nombres.filter((nombre) => {
//     if (nombre.length === 4) {
//         return nombre;
//     }
// });

// console.log(nombre4Letras);

/*.inclides()
Nos permite saber si el arreglo contiene un elementos especifico
*/

// console.log (nombres.includes('Julio0'))
// console.log (nombres.includes ('Carlos'))

/*.every
Nos permite ejecutat un condicional sobre cada elemento y nos devuelve true si TODOS los elementos cumplieran con la condición
*/

// const nombresValidos = nombres.every((nombre) => {
//     if (typeof nombre === "string") {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log('¿Todos los nombres son validos ' +  nombresValidos);


/*
.some()
Nos permite ejecutar un condicional sobre cada elemento u nos devuelve true si algun elemento cumplio la condición.
*/

const nombresValidos = nombres.some((nombre) => {
    if (typeof nombre === "string") {
        return true;
    } else {
        return false;
    }
});
console.log('El arreglo es invalido ' +  nombresValidos);