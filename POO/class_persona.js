// class Coche {
//     constructor(color, marca, tipo, modelo, identificador) {
//         this.color = color
//         this.marca = marca
//         this.tipo = tipo
//         this.modelo = modelo
//         this.identificador = identificador
//     }

//     encender() {
//         return "estoy encendiendo";
//     }

//     avanzar() {
//         console.log("estoy avanzando");
//     }

//     mostrar_papeles() {
//         console.log(`mostrando papeles de: ${this.identificador}`);
//         console.log(this.marca);
//         console.log(this.modelo);
//         console.log(this.tipo);
//         console.log(this.color);
//     }


// }


// let carroSwift = new Coche("azul", "suzuki", "sedan", "2025", "carro1");
// console.log(`El carro 1: ${carroSwift.encender()}`);


// let carroMazda = new Coche("rojo", "mazda", "sedan", "1999", "carro2");
// console.log(`El carro 2: ${carroMazda.encender()}`);

// carroSwift.mostrar_papeles();
// carroMazda.mostrar_papeles();



let tecla1 = document.querySelector("#teclaBlanca");
let tecla2 = document.querySelector("#teclaNegra");


tecla1.addEventListener("click", () => {
    tecla1.style.backgroundColor = "red";
    let configAudio = new Audio("sonido1.mp3")
    configAudio.play();
});