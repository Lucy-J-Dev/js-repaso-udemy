/*
Estructura de una clase:
- Definición
- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
- Constructor: En un método especial para inicializar un objeto creado a partir de una clase.
- Método: La clase puede contener funciones. Dentro de una clase se llaman métodos.
*/

class Usuario {
  tipo = 'usuario';

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    console.log('Nuevo usuario registrado');
  }

  obtenerNombreCompleto() {
    console.log('Obtener datos...');
    return `${this.nombre}, ${this.apellido}`;
  }
}

const usuario = new Usuario('Lucy', 'Jimenez');
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Alejandro', 'Paz');
console.log(usuario2.obtenerNombreCompleto());
