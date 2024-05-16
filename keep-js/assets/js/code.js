//cSpell:disable
let divNota = document.querySelector("#seccion-notas")
let contador
if (localStorage.getItem('contador_notas') == null) {
    contador = 1
} else {
    contador = localStorage.getItem('contador_notas')
}

llamadoFunciones()

function llamadoFunciones() {
    mostar_notas()
    asignar_evento_eliminar()
    asignar_evento_actualizar()
}


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
    contador = parseInt(contador)
    let nota = {
        id: contador,
        titulo: titulo,
        contenido: contenido
    }

    notas_almacenadas.push(nota)


    localStorage.setItem('notas', JSON.stringify(notas_almacenadas))
    contador = parseInt(contador) + 1
    localStorage.setItem('contador_notas', contador)
    evento.target.reset()
    llamadoFunciones()
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
            Swal.fire({
                title: "Esta seguro?",
                text: "Esta acción no se podra deshacer!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    let id_nota = evento.target.dataset.notaEliminar
                    let notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
                    let posicion = notas_almacenadas.findIndex((nota) => nota.id == id_nota)
                    notas_almacenadas.splice(posicion, 1)
                    localStorage.setItem('notas', JSON.stringify(notas_almacenadas))
                    llamadoFunciones()
                    Swal.fire({
                        title: "Nota eliminada!",
                        icon: "success"
                    });
                }
            });



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

function asignar_evento_actualizar() {
    let botones_editar = document.querySelectorAll("[data-nota-editar]")
    botones_editar.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            document.querySelector("#titulo-pagina").innerHTML = "Editar Nota"
            let id_nota = evento.target.dataset.notaEditar
            let divBotones = document.querySelector("#div-botones-formulario")

            // * Creación de botón
            divBotones.innerHTML = ""
            let botonActualizar = document.createElement("button")
            botonActualizar.innerText = "Actualizar"
            botonActualizar.classList.add("btn", "btn-success", "p-2", "fw-bold", "my-3", "fs-3")
            botonActualizar.type = "button"
            botonActualizar.setAttribute("data-id-nota-editar", id_nota)
            botonActualizar.addEventListener("click", (evento) => {
                let id_nota_boton = evento.target.dataset.idNotaEditar
                console.log('id_nota:', id_nota_boton)
                let notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
                let posicion = notas_almacenadas.findIndex((nota) => nota.id == id_nota_boton)
                notas_almacenadas[posicion].titulo = document.querySelector("#txtTitulo").value
                notas_almacenadas[posicion].contenido = document.querySelector("#textoNota").value
                localStorage.setItem('notas', JSON.stringify(notas_almacenadas))
                let divBotones = document.querySelector("#div-botones-formulario")
                divBotones.innerHTML = `<button type="submit" class="btn btn-warning fw-bold mt-3 text-uppercase fs-3" id="btn-guardar-nota">Agregar</button>`
                llamadoFunciones()
                document.querySelector("#txtTitulo").value = ""
                document.querySelector("#textoNota").value = ""
                document.querySelector("#titulo-pagina").innerHTML = "Agregar nota"
            })
            divBotones.appendChild(botonActualizar)

            // * Alimentado el formulario
            let formTxtTitulo = document.querySelector("#txtTitulo")
            let formTextoNota = document.querySelector("#textoNota")
            let notas_almacenadas = JSON.parse(localStorage.getItem('notas'))
            let posicion = notas_almacenadas.findIndex((nota) => nota.id == id_nota)
            formTxtTitulo.value = notas_almacenadas[posicion].titulo
            formTextoNota.value = notas_almacenadas[posicion].contenido
        })
    });
}