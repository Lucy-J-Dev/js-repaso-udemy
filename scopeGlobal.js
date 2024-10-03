/* Global Scope o Variables globales
    - Son las variables declaradas fuera de una funcion.
    - Podemos acceder a ellas desde cualquier parte del codigo.
    - Podemos usar const, let, var.
*/

var nombre = "Carlos";
console.log(nombre);

const saludo = () => {
    console.log("Hola " + nombre);

    nombre = "Arturo";
    console.log("El nuevo nombre es " + nombre);
};

saludo();
