//cSpell:disable
let divNota = document.querySelector("#seccion-notas")
let contador
if (localStorage.getItem('contador_notas') == null) {
    contador = 1
} else {
    contador = localStorage.getItem('contador_notas')
}

mostar_notas()
asignar_evento_eliminar()


let formulario = document.querySelector("#form-notas")
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    let notas_almacenadas

    if (localStorage.getItem('notas') == null) {
        notas_almacenadas = []
    } else {
        notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
    }

    let titulo = evento.target.txtTitulo.value
    let contenido = evento.target.textoNota.value

    let nota = {
        id: contador,
        titulo: titulo,
        contenido: contenido
    }
    notas_almacenadas.push(nota)
    localStorage.setItem('notas', JSON.stringify(notas_almacenadas))
    contador = parseInt(contador) + 1
    localStorage.setItem('contador_notas', contador)
    mostar_notas()
    asignar_evento_eliminar()
})


function mostar_notas() {
    divNota.innerHTML = ""
    if (localStorage.getItem('notas') != null) {
        let notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
        for (const notaUsuario of notas_almacenadas) {
            divNota.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${notaUsuario.titulo}</h5>
                        <p class="card-text">${notaUsuario.contenido}</p>
                        <div class="d-flex justify-content-center align-items-center">
                            <i class="bg-primary text-white py-2 px-3 mx-2 rounded fa-solid fa-pencil" data-nota-editar="${notaUsuario.id}"></i>
                            <i class="bg-danger text-white py-2 px-3 mx-2 rounded fa-solid fa-trash" data-nota-eliminar="${notaUsuario.id}"></i>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    } else {
        divNota.innerHTML += `
        <div class="alert alert-warning" role="alert">
            <strong>No hay notas almacenadas</strong>
        </div>
        `
    }
}


function asignar_evento_eliminar() {
    let botones_eliminar = document.querySelectorAll("[data-nota-eliminar]")
    for (const boton of botones_eliminar) {
        boton.addEventListener("click", (evento) => {
            let id_nota = evento.target.dataset.notaEliminar
            let notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
            let posicion = notas_almacenadas.findIndex((nota) => nota.id == id_nota)
            notas_almacenadas.splice(posicion, 1)
            localStorage.setItem('notas', JSON.stringify(notas_almacenadas))
            mostar_notas()
        })
    }

    // botones_eliminar.forEach((boton, posicion) => {
    //     boton.addEventListener("click", (evento) => {
    //         let notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
    //         notas_almacenadas.splice(posicion, 1)
    //         localStorage.setItem('notas', JSON.stringify(notas_almacenadas))
    //         mostar_notas()
    //     })
    // });


}