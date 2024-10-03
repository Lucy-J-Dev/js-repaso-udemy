/*Operador Spread
Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio
*/

// const frutas = ['Manzana', 'Pera', 'Piña','Melon'];
// const comidaFavorita = ['Pizza', 'Hamburguesa', ...frutas ];
// console.log(comidaFavorita);


// const datosLogin = {
//     correo: 'correo@correo.com',
//     password: '123'
// };

// const usuario = {
//     nombre: 'Lucy',
//     ...datosLogin,
//     edad: 39
// };

// console.log(usuario);

/*
Parametro Rest
Permite que una funcion contenga un numero indefinido de argumentos.
Los argumentos extras que encuentre los convertira en un arreglo.
*/

// const registroUsuario = (nombre, correo, ...datosAdicionales) => {

//     console.log(nombre, correo, datosAdicionales)
// };

// registroUsuario('Carlos', 'correo@correo.com'),
// registroUsuario('Alejandro', 'alex@correo.com', 28, 'España');


/*
Destructuración de objetos 
Nos permite obtner elementos o propiedades de una arreglo u objeto y guardarlas en una variable.
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];

const [primerAmigo, SegundoAmigo, TecerAmigo] = amigos;

console.log(primerAmigo);


const persona = {
    nombre: 'Daniela',
    edad: 35,
    pais: 'Colombia',
};

const {nombre, pais, edad} = persona
console.log(nombre, pais);


const mostrarEdad = (nombre, edad) => {
    console.log (`${nombre} tiene ${edad} años`)
};

mostrarEdad(persona.nombre, persona.edad);


