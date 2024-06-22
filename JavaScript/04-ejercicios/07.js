function precioCompleto(precio, impuesto) {
    return precio * (1 + impuesto)
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);