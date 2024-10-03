const operacion = (tipo, numero1, numero2) => {
 

    if (tipo === "suma") {
        return numero1 + numero2;
    } else if (tipo === "resta") {
        return numero1 - numero2;
    }

    return resultado;
};

const MiVariable = operacion("suma", 6, 7);
console.log(MiVariable);
