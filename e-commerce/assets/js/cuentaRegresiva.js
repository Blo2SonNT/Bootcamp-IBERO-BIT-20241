let tiempoTotal = 2 * 24 * 60 * 60 + 18 * 60 * 60 + 30; // Tiempo en segundos (2 días, 18 horas, 30 segundos)
let tiempoRestante = tiempoTotal;
let cuentaRegresiva;

function iniciarCuentaRegresiva() {
    cuentaRegresiva = setInterval(function() {
        tiempoRestante--;
        actualizarCuentaRegresiva();
        if (tiempoRestante <= 0) {
            detenerCuentaRegresiva();
            document.querySelector("#cuentaRegresiva").innerHTML = ''
        }
    }, 1000);
}

function detenerCuentaRegresiva() {
    clearInterval(cuentaRegresiva);
}

function actualizarCuentaRegresiva() {
    let dias = Math.floor(tiempoRestante / (24 * 60 * 60));
    let horas = Math.floor((tiempoRestante % (24 * 60 * 60)) / (60 * 60));
    let minutos = Math.floor((tiempoRestante % (60 * 60)) / 60);
    let segundos = tiempoRestante % 60;

    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    document.querySelector("#cuentaRegresiva").innerHTML = dias + " días: " + horas + " horas: " + minutos + " minutos: " + segundos + " segundos";
}

iniciarCuentaRegresiva()