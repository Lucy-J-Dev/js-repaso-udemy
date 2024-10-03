/*
.length 
Devuelve el número de caracteres de una cadena de texto
*/

// const texto = 'Hola soy Lucy';
// console.log(texto.length);

/*
.indexOf ()  .lastIndexOf 
Devuelve el index del primer/ultimo caracter especificado
*/

// const texto = 'Hola soy Lucy';
// console.log(texto.indexOf('H'));
// console.log(texto.lastIndexOf('o'));

/*
.slace()
Devuelve un fragmento de una cadena de texto
1er Parametro - index desde donde queremos cortar.
2do Parametro - (opcional) - index hasta donde queremos cortar.
*/


// const texto = 'Hola yo soy Lucy!';
// const index = texto.indexOf('s');
// const lastIndexOf = texto.lastIndexOf('!')
// console.log(texto.slice(index, lastIndexOf));



/*
.replace()
Devuelve una cadena de texto de donde se remplaza un valor por otro.
1er Parametro - El texto que queremos remplazar.
2do Parametro - El texto que queremos poner.
*/

// const texto = 'Hola yo soy Lucy';
// console.log(texto.replace ('Lucy', 'Danna' )); 

/*
.split()
Convierte una cadena de texto en un arreglo.
Tenemos qu especificar donde cortar cada elemento.

1er Parametro - el caracter que funciona como separador
*/

const texto = 'Hola yo soy Lucy';
console.log(texto.split(' ') );

/*
toUpperCase() .toLowerCase()
Devuelve una cadena de texto de pura Mayusculas o Minusculas.
*/

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

