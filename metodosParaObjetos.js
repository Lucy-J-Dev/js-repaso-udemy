const usuario = {
    nombre: "Carlos",
    edad: 27,
    amigos: ["Alejandro", "Cesar", "Manuel"],
    saludo: () => {
        console.log("Hola!");
    },
};

/*
Metodos propios
Los objetos pueden tener métodos personalizados.
*/

usuario.saludo();

/*
objet.keys()
Nos devuelve un arreglo con las llaves (keys) del objeto.
*/

// const resultados = Object.keys(usuario);
// console.log(resultados);

/*
Object.values()
Nos devuelve un arreglo con los valores (values) del objeto
*/


// const resultados = Object.values(usuario);
// console.log(resultados);


/*
Object.entries()
*/

const resultado = Object.entries(usuario);
console.log(resultado)



