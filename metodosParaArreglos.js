const colores = ["Rojo", "Verde", "Azul"];

/*
.length
(propiedad) - Nos permiteconocer la cantida de elementos de un arreglo.
*/

console.log(colores.length);

/*
toString()
Nos permite trasformar un arreglo a una cadena de texto.
Por ejemplo para poder mostrarlo en el navegador. 
*/

// document.body.innerHTML = colores.toString();

/*
.join()
Nos permite transformar un arreglo a una cadena de texto y separar cada elemento
*/

console.log(colores.join("-"));

/*
.sort()
Nos permite ordenar un arreglo de cadena de texto, de forma alfabetica.
*/

const letras = ["c", "a", "d", "b"];
console.log(letras.sort());

const numeros = [3, 1, 5, 2, 4];
console.log(numeros.sort());

/*
.reverse()
Nos permite ordenar un arreglo de forma descendente.
*/

console.log(letras.reverse());
console.log(numeros.reverse());

/* 
.concat()
Nos permite juntar dos arreglos en uno solo.
*/

const arreglo1 = [1, 2, 3];
const arreglo2 = ["A", "B", "C"];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

/*
.push()
Nos permite agregar un elemento al final del arreglo.
*/

colores.push("Amarillo");
console.log(colores);

/* 
.pop()
Nos permite eliminar el ultimo elemento de un arreglo.
*/

colores.pop();
colores.pop();
console.log(colores);

/* 
.shift()
Elimina el primer elemento de un arregloy recorre los elementos.
*/

const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];

console.log(dias);
const diaEliminado = dias.shift();
console.log(diaEliminado);
console.log(dias[0]);

/*
.unsdhift()
Agrega un elemento al inicio del arreglo y empuja los elementos.
*/

dias.unshift('Verano');
console.log(dias);

/*
.splice()
Nos permite insertar elementos a un arreglo donde le especifiquemos.
- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
-2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
- Resto de parametros - Los elementos a insertar.
*/

const amigos = [
    'Alejandro', 'Cesar', 'Mario'
];
amigos.splice(1,2, 'Rafael', 'Carlos');
console.log(amigos);

/* .slice()
Nos permite copiar una parte de un areglo a otro.
- 1er parametro - Posición desde donde queremos copiar.
2do parametro - Hasta antes de elemento copiar
*/

const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1,5);
console.log(frutasFavoritas);




