class TeclaPiano {
    constructor(nota, tecla) {
        this.nota = nota;
        this.tecla = tecla;
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
    new TeclaPiano('nota1.mp3', 'a'),
    new TeclaPiano('nota2.mp3', 's'),
    new TeclaPiano('nota3.mp3', 'd'),
    new TeclaPiano('nota4.mp3', 'f'),
    new TeclaPiano('nota5.mp3', 'g'),
    new TeclaPiano('nota6.mp3', 'h'),
    new TeclaPiano('nota7.mp3', 'j'),
    new TeclaPiano('nota8.mp3', 'k'),
];

console.log(teclasPiano);

let pianoContainer = document.querySelector('#piano');
teclasPiano.forEach(tecla => {
    pianoContainer.appendChild(tecla.elemento);
});


document.addEventListener('keydown', (evento) => {
    let accion = teclasPiano.find(gamin => gamin.tecla === evento.key);
    if (accion !== undefined) {
        accion.reproducirSonido();
        accion.elemento.classList.add('teclaRGB');
        setTimeout(() => {
            accion.elemento.classList.remove('teclaRGB')
        }, 2000);
    }
})