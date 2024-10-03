//boleanos
const usuarioConectado = false;
const mayorQue = 10 > 2;

console.log(mayorQue);

//arrays
const arreglo = ["texto", 123, true, [1, 2, 3], { propiedad: "valor" }];
console.log(arreglo);

//objetos
const persona = {
    nombre: "Lucy",
    edad: "39",
    carro: {
        marca: "Kia",
        color: "Gris",
    },
};

console.log(persona.carro.color);

//funtion
function hola() {
    console.log("hola");
}

hola();

//null
const miVariable = null;

//undefined
const miVariable2 = undefined;
