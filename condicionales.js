// Estructura de una condicional
// if (true) {
// codigo a ejecutar
// }

// Ejemplo #1:
// const usuario = {
//     edad: 17,
//     pais: "Colombia",
//     ticket: true,
// };

// if (usuario.edad > 17) {
//     console.log("El usuario es mayor de edad, puede entrar al concierto");
// } else {
//     console.log('El usuario es menor de edad, no puede entrar al concierto');
// }

// Ejemplo #2 combinando operadores
// const usuario = {
//     edad: 19,
//     pais: "Colombia",
//     ticket: true,
// };

// if (usuario.edad >= 18 && usuario.ticket) {
//     console.log("El usuario es mayor de edad y tiene un ticket");
// } else {
//     console.log("El usuario no es mayor de edad o no tiene ticket");
// }

// Ejemplo #3 Anidando condicionales
// const usuario = {
//     edad: 27,
//     pais: "Colombia",
//     ticket: false,
// };

// if (usuario.edad >= 18) {
//     if (usuario.ticket){
//         console.log('El usuario es mayor de edad y tiene ticket');
//     }else {
//         console.log('El usuario es mayor de edad, pero no tiene ticket');
// }
// }else {
//     console.log ('El usuario es menor de edad')
// };

// Ejemplo #4 elseif
const usuario = {
    edad: 27,
    pais: "argentina",
    ticket: false,
};

if(usuario.pais ==='colombia'){
    console.log('El usuario es colombiano');
}else if (usuario.pais ==='mexico'){
    console.log('El usuario es mexicano');
}else if (usuario.pais ==='españa'){
    console.log('El usuario es español');
}else {
    console.log('El usuario es de otro pais');
}