/* 
Parametros: los valores especificos en la definición.
Argumentos: los valores que le pasams a la función cuando la invocamos.
*/

// const saludo = (nombre = 'amigo') => {
//     console.log (`Hola ${nombre}`)
// };

// saludo('Carlos');
// saludo('Francisco');
// saludo();

const operacion = (tipo, numero1, numero2) => {
    // console.log(numero1 + numero2);

    if (tipo === "suma") {
        console.log(numero1 + numero2);
    } else if (tipo === "resta") {
        console.log(numero1 - numero2);
    }
};

operacion("suma", 2, 5);
operacion("resta", 90, 30);
