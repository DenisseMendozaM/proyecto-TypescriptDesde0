"use strict";
exports.__esModule = true;
exports.disponible = exports.fallo = exports.compra = void 0;
function compra() {
    var mensaje = confirm('Prenda apartada');
    if (mensaje) {
        alert("¡Por favor envia mensaje al 5536655440 para concretar tu compra!");
    }
}
exports.compra = compra;
function fallo() {
    alert('Prenda fuera de stock única pieza');
}
exports.fallo = fallo;
function disponible() {
    alert('Prenda disponible única pieza');
}
exports.disponible = disponible;
