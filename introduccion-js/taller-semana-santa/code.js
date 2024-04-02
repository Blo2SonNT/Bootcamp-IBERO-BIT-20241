// function evaluarNombre(nombre) {

//     if (nombre == "Carlos") {
//         console.log("hola carlos");
//     } else {
//         console.error("No eres Carlos");
//     }

//     if (nombre == "Carlos" || nombre == "Juan") {
//         switch (nombre) {
//             case 'Carlos':
//                 if (1 == 2) {
//                     console.log("un mensaje!");
//                 } else {
//                     let listaHTML = document.querySelector("#lista")
//                     console.dir(listaHTML)
//                     for (let x = 0; x <= 10; x++) {
//                         listaHTML.innerHTML += `<span> ${x} </span>`;
//                     }
//                 }
//                 console.log("hola carlos");
//                 break;
//             default:
//                 console.log("hola juan");
//                 break;
//         }
//     } else {
//         console.error("No eres Carlos ni Juan");
//     }


//     switch (nombre) {
//         case 'Carlos':
//             console.log("hola carlos");
//             break;
//         case 'Juan':
//             console.warn("hola juan");
//             break;
//         default:
//             console.error("No eres Carlos ni Juan");
//             break;
//     }

// }

// document.querySelector("#btnEjecutar").addEventListener("click", () => {
//     let nombreUsuario = document.querySelector("#inputNombre").value
//     evaluarNombre(nombreUsuario)
// })


// let texto1 = document.getElementById('mitexto');

// texto1.addEventListener('keydown', (event) => {
//     console.log('event:', event)
//     console.log('Tecla presionada por el usuario: ' + event.key);
//     event.target.classList.add('bg-warning');
// });


// document.querySelector("#formulario").addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log('event.target:', event.target)
//     console.log(event.target.mitexto);
// })


// console.log("mensaje");
// console.error("error")
// console.warn("advertencia")
// console.dir(texto1)
// console.info("mensaje")
// console.table({ llave: "valor", llave2: "valor2" })
// console.log("%cHola mundo", "color:green; font-size:2rem; font-weight:bold")




let arreglo_numeros = [1, 3, 75, 85, 20, 36]

function findMaxMin(arreglo) {
    let max = arreglo[0]
    let min = arreglo[0]
    for (let x = 0; x < arreglo.length; x++) {
        if (arreglo[x] > max) {
            max = arreglo[x]
        }
        if (arreglo[x] < min) {
            min = arreglo[x]
        }
    }

    console.log(max)
    console.log(min)
}

// findMaxMin(arreglo_numeros)



let numero_factorial = 5

function factorial(numero) {
    let calculo = 1
    for (let x = 1; x <= numero; x++) {
        calculo = calculo * x
    }
    console.log(calculo)
}

// factorial(numero_factorial)


let array_punto_3 = [1, 2, 3, 4, 2, 2, 5, 5, 8, 5, 8]

function obtener_repeticiones(arreglo, numero_busqueda1, numero_busqueda2) {
    let cantidad_repetidas_busqueda_1 = 0
    let cantidad_repetidas_busqueda_2 = 0
    for (let x = 0; x < arreglo.length; x++) {
        if (arreglo[x] == numero_busqueda1) {
            cantidad_repetidas_busqueda_1++
        }
        if (arreglo[x] == numero_busqueda2) {
            cantidad_repetidas_busqueda_2++
        }
    }
    console.log(`La cantidad de veces que se repite el elemento ${numero_busqueda1} dentro del arreglo es: ${cantidad_repetidas_busqueda_1}`);
    console.log(`La cantidad de veces que se repite el elemento ${numero_busqueda2} dentro del arreglo es: ${cantidad_repetidas_busqueda_2}`);
}

obtener_repeticiones(array_punto_3, 5, 8)



let inicio = document.querySelector("#inicioContador").innerText
inicio = parseInt(inicio)

setInterval(() => {
    inicio--
    document.querySelector("#inicioContador").innerText = inicio
}, 1000);