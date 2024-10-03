/* Local Scope o Variables Locales
    - Son las variables declaradas dentro de una funcion.
    - Solo podemos acceder a ellas desde dentrode la funcion.
*/

var obtenerNumeroLetras =(nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var funcioAnidada = () => {
        console.log(numero)
    };
    funcioAnidada();
};
obtenerNumeroLetras('Carlos');