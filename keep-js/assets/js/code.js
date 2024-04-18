//cSpell:disable

let divNota = document.querySelector("#seccion-notas")

let contador

if (localStorage.getItem('contador_notas') == null) {
    contador = 1
} else {
    contador = localStorage.getItem('contador_notas')
}

mostrar_notas(contador)
asignar_evento_delete()
console.log('contador:', contador)

let formulario = document.querySelector('#form-notas');
formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();
    /*
        AND ( && )
        OR ( || ) 
    */
    if (evento.target.txtTitulo.value == '' || evento.target.textoNota.value == '') {
        Swal.fire({
            title: "Diligencie todos los campos",
            text: "No sea bestia",
            icon: "error",
            color: "#fff",
            iconColor: "#ff0f0f",
            confirmButtonText: "Aceptar 🥲",
            html: "<b>Por favor diligencie todos los campos</b>",
            confirmButtonColor: "#337a2d",
            customClass: {
                popup: 'alerta_error' // Clase CSS personalizada para el contenido de la alerta
            },
            backdrop: `
                        rgba(214, 214, 1, 0.63)
                        url("https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif")
                        left top
                        no-repeat
                    `,
            background: "#fff url(https://oyedigital.mx/wp-content/uploads/2022/03/nota_mejoresmemes_mar22.jpg)",
        });
        return
    }

    let titulo = evento.target.txtTitulo.value
    let nota = evento.target.textoNota.value

    localStorage.setItem(`titulo_nota_${contador}`, titulo)
    localStorage.setItem(`texto_nota_${contador}`, nota)
    contador++
    localStorage.setItem('contador_notas', contador)
    mostrar_notas(contador)
    evento.target.reset()
})

let botonBorrar = document.querySelector('#btn-borrar')
botonBorrar.addEventListener('click', function() {
    if (confirm('¿Está seguro de borrar todas las notas?') == true) {
        divNota.innerHTML = ''
    }
})

function mostrar_notas(contador_de_notas) {
    divNota.innerHTML = ''
    for (let x = 1; x < contador_de_notas; x++) {

        let titulo_nota = localStorage.getItem(`titulo_nota_${x}`)
        let texto_nota = localStorage.getItem(`texto_nota_${x}`)

        if (titulo_nota != null && texto_nota != null) {
            divNota.innerHTML += `
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${titulo_nota}</h5>
                            <p class="card-text">${texto_nota}</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="bg-danger text-white py-2 px-3 rounded fa-solid fa-trash" data-nota="${x}"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}


function asignar_evento_delete() {
    let botones_borrar = document.querySelectorAll('[data-nota]')
    console.log(botones_borrar)
        // for (let gamin = 0; gamin < botones_borrar.length; gamin++) {
        //     console.log(botones_borrar[gamin])
        // }

    botones_borrar.forEach((boton) => {
        boton.addEventListener('click', function() {
            // let nota_getAtt = boton.getAttribute('data-nota')
            // console.log('nota_getAtt:', nota_getAtt)
            let id_nota = boton.dataset.nota
            localStorage.removeItem(`titulo_nota_${id_nota}`)
            localStorage.removeItem(`texto_nota_${id_nota}`)
            mostrar_notas(contador)
            asignar_evento_delete()
        })
    });

}


// data-nota-peye

// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 30,
//     genero: "M"
// }


// let billete = {
//     denominacion: 100000,
//     desing: "Bolivar estando junto a un perro rabioso y un indigena gritando por su oro",
//     size: "10x5cm",
//     color: "rojo con cafe",
//     pais: "Colombia",
//     material:["papel","tinta","holograma","hilo de seguridad","marca de agua"],
//     divisa_simbolo: "$",
//     divisa_nombre: "peso colombiano",
//     activo: true
// }


// function sumar(a, b) {
//     let saludoUsuario = saludo("dallana")
//     return saludoUsuario + " su operacion es: " + (parseInt(a) + parseInt(b));
// }

// console.log(sumar("5", 5))

// function saludo(nombre_persona) {
//     return "Hola " + nombre_persona + "!";
// }

// console.log(saludo("Juan"))
// console.log(saludo("jesar"))