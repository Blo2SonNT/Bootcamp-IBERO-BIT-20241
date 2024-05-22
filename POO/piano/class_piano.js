class TeclaPiano {
    constructor(nota) {
        this.nota = nota;
        this.elemento = document.createElement('div');
        this.elemento.classList.add('tecla-piano');
        this.elemento.dataset.nota = this.nota;
        this.elemento.addEventListener('click', this.reproducirSonido.bind(this));
    }

    reproducirSonido() {
        let audio = new Audio(`audio/${this.nota}`);
        audio.play();
    }
}


let teclasPiano = [
    new TeclaPiano('nota1.mp3'),
    new TeclaPiano('nota2.mp3'),
    new TeclaPiano('nota3.mp3'),
    new TeclaPiano('nota4.mp3'),
    new TeclaPiano('nota5.mp3'),
    new TeclaPiano('nota6.mp3'),
    new TeclaPiano('nota7.mp3'),
    new TeclaPiano('nota8.mp3'),
];

let pianoContainer = document.querySelector('#piano');
teclasPiano.forEach(tecla => {
    pianoContainer.appendChild(tecla.elemento);
});

// let body = document.querySelector('body');
// let seccion1 = document.createElement('section');
// seccion1.innerText = 'Hola';
// seccion1.classList.add('fs-2', 'text-center', 'text-danger');
// body.appendChild(seccion1);