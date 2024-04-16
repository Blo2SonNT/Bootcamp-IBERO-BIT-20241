let divNota = document.querySelector("#seccion-notas")

let formulario = document.querySelector('#form-notas');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    /*
        AND ( && )
        OR ( || ) 
    */
    if (evento.target.txtTitulo.value == '' || evento.target.textoNota.value == '') {
        alert('Debe completar todos los campos')
        return
    }

    let titulo = evento.target.txtTitulo.value
    let nota = evento.target.textoNota.value

    divNota.innerHTML += `
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${nota}</p>
                </div>
            </div>
        </div>
    `
    evento.target.reset()
})

let botonBorrar = document.querySelector('#btn-borrar')
botonBorrar.addEventListener('click', function() {
    if (confirm('¿Está seguro de borrar todas las notas?') == true) {
        divNota.innerHTML = ''
    }
})


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