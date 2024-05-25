const PI = 3.1416;
let operaciones = {}



function suma(x, y) {
    return x + y;
}

function restar(a, b) {
    return a - b;
}

function dividir(j, k) {
    if (k == 0) {
        return "No se puede dividir por 0";
    } else {
        return j / k;
    }
}



operaciones.sumita = suma;
operaciones.restar = restar;
operaciones.dividir = dividir;
operaciones.PI = PI;


module.exports = operaciones;