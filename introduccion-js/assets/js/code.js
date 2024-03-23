//cSpell:disable
let boton = document.querySelector("#btnOpresion")

boton.addEventListener("click", () => {
    let titulopagina = document.querySelector("#titulo")
    titulopagina.innerHTML = "HOLA MUNDO! 🌐"
    titulopagina.classList.add("text-warning", "text-center")
})


///Ciclo

for (let x = 1; x <= 100; x++) {
    if (x == 98) {
        debugger
    }
    console.log(x)
}

// let x = 1
// while (x <= 100) {
//     console.warn(x)
//     x++
// }

let x = 1

do {
    console.log(x)
    x++
} while (x < 1);