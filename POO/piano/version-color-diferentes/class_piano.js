class TeclaPiano {
    constructor(nota, tecla, fondo) {
        this.nota = nota;
        this.tecla = tecla;
        this.fondo = fondo;
        this.elemento = document.createElement('div');
        this.elemento.classList.add('tecla-piano');
        this.elemento.dataset.nota = this.nota;
        this.elemento.innerText = this.tecla;
        this.elemento.addEventListener('click', this.reproducirSonido.bind(this));
    }

    reproducirSonido() {
        let audio = new Audio(`../audio/${this.nota}`);
        audio.play();
    }
}


let teclasPiano = [
    new TeclaPiano('nota1.mp3', 'a', 'red'),
    new TeclaPiano('nota2.mp3', 's', 'green'),
    new TeclaPiano('nota3.mp3', 'd', 'blue'),
    new TeclaPiano('nota4.mp3', 'f', 'yellow'),
    new TeclaPiano('nota5.mp3', 'g', 'orange'),
    new TeclaPiano('nota6.mp3', 'h', 'purple'),
    new TeclaPiano('nota7.mp3', 'j', 'pink'),
    new TeclaPiano('nota8.mp3', 'k', 'brown'),
];

console.log(teclasPiano);

let pianoContainer = document.querySelector('#piano');
teclasPiano.forEach(tecla => {
    pianoContainer.appendChild(tecla.elemento);
});


document.addEventListener('keydown', (evento) => {
    let accion = teclasPiano.find(gamin => gamin.tecla === evento.key);
    if (accion !== undefined) {
        let numeroRandom = Math.floor(Math.random() * 100);
        let numeroRedondeado = Math.floor(numeroRandom / 10) * 10;
        accion.reproducirSonido();
        accion.elemento.classList.add(accion.fondo)
        setTimeout(() => {
            accion.elemento.classList.remove(accion.fondo)
        }, 100);
    }
})