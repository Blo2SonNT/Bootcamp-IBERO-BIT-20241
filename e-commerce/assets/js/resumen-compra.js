//cSpell:disable
document.querySelector("#btn-regresar").addEventListener("click", () => {
    location.href = "index.html"
})

llamadaFunciones()


let estadoEnvioNormal = document.querySelector("#envioNormal").checked
let estadoEnvioPrioritario = document.querySelector("#envioPrioritario").checked


function listarProductos() {

    let lista = document.querySelector('#lista-productos')
    lista.innerHTML = ''
    let productosCarrito = JSON.parse(localStorage.getItem('productosAgregados'))


    if (productosCarrito != null && productosCarrito.length > 0) {
        for (const producto of productosCarrito) {
            lista.innerHTML += `
            <div class="card my-4">
                <button type="button" class="btn-close botonQuitar" data-id-producto="${producto.id}"></button>
                <div class="card-body d-flex justify-content-between">
                    <div class="d-flex justify-content-center">
                        <img src="${producto.imagen}" class="imgProducto" alt="">
                        <div class="d-flex justify-content-center align-items-start flex-column ms-4">
                            <h5>${producto.nombre}</h5>
                            <h6 id="precioTotalProducto${producto.id}">$ ${producto.precio}</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <i class="btn botonControl d-flex justify-content-center align-items-center mx-4 fa-solid fa-minus" id="btnRestar${producto.id}" data-btn-id="${producto.id}" data-accion="restar"></i>
                        <h5 id="cantidadProducto${producto.id}">${producto.cantidad}</h5>
                        <i class="btn botonControl d-flex justify-content-center align-items-center mx-4 fa-solid fa-plus" id="btnSumar${producto.id}" data-btn-id="${producto.id}" data-accion="sumar"></i>
                    </div>
                </div>
            </div>
        `
        }
    } else {
        lista.innerHTML = `
            <div class="alert alert-warning text-center h3" role="alert">
                <strong>No hay productos en el carrito</strong>
            </div>
        `
        document.querySelector('#btn-borrar-carro').classList.add('d-none')
    }

}


function asignarEvento() {
    let productosGuardados = JSON.parse(localStorage.getItem('productosAgregados'))
    let botonesOperacion = document.querySelectorAll('[data-accion]')
    botonesOperacion.forEach(boton => {
        boton.addEventListener('click', (e) => {
            let operacion = e.target.dataset.accion
            let infoProducto = productosGuardados.findIndex(producto => producto.id == e.target.dataset.btnId)

            let cantidadActual = parseInt(productosGuardados[infoProducto].cantidad)

            if (operacion == "sumar") {
                productosGuardados[infoProducto].cantidad = cantidadActual + 1
            } else if (operacion == "restar") {
                if (cantidadActual != 1) {
                    productosGuardados[infoProducto].cantidad = cantidadActual - 1
                }
            }

            localStorage.setItem('productosAgregados', JSON.stringify(productosGuardados))
            llamadaFunciones()
        })
    });


    let botonesQuitar = document.querySelectorAll('.botonQuitar')
    botonesQuitar.forEach(equis => {
        equis.addEventListener('click', (e) => {
            let infoProducto = productosGuardados.findIndex(producto => producto.id == e.target.dataset.idProducto)
            productosGuardados.splice(infoProducto, 1)
            localStorage.setItem('productosAgregados', JSON.stringify(productosGuardados))
            llamadaFunciones()
        })
    });

    document.querySelector('#btn-borrar-carro').addEventListener('click', () => {

        Swal.fire({
            title: "Esta seguro de eliminar todos los productos del carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "No, cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('productosAgregados')
                llamadaFunciones()
                Swal.fire({
                    title: "Seras redirigido a la pagina de inicio",
                    icon: "info",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Aceptar",
                    allowOutsideClick: false,
                    allowEscapeKey: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.href = "index.html"
                    }
                });
            }
        });


    })

}

function actualizarCantidad(seccion) {
    let productosAgregados = JSON.parse(localStorage.getItem('productosAgregados'))

    if (seccion == 'cantidadProductos') {

        // * PROCESO CANTIDAD PRODUCTOS

        let spanCantidad = document.querySelector("#cantidad-productos")
        let contador = 0
        productosAgregados.forEach(productoLS => {
            contador = contador + productoLS.cantidad
        });
        spanCantidad.innerHTML = contador
    } else if (seccion == 'precioTotal') {

        // * PROCESO CALCULO TOTAL

        let numeroFormateado
        let spanPrecioTotal = document.querySelector("#precio-total")
        let contador = 0
        productosAgregados.forEach(productoLS => {
            let precioXProducto = productoLS.precio * productoLS.cantidad
            contador = contador + precioXProducto
            let estadoPrioritario = document.querySelector("#envioPrioritario").checked
            if (estadoPrioritario) {
                contador = contador + 5000
            }

            document.querySelector("#valoriH").value = contador
            numeroFormateado = contador.toLocaleString('es-ES');
        });
        spanPrecioTotal.innerHTML = `$ ${numeroFormateado}`
    } else {

        // * PROCESO DESCUENTO

        let total
        let cantidadTotal = document.querySelector("#cantidad-productos").innerText
        let valorCompra = document.querySelector("#valoriH").value
        console.log('valorCompra:', valorCompra)
        if (cantidadTotal > 7) {
            let descuento = valorCompra * 0.2
            let numeroFormateado = descuento.toLocaleString('es-ES');
            total = valorCompra - descuento

            document.querySelector("#divDescuento").classList.remove('d-none')
            document.querySelector("#texto-total").innerHTML = "Total sin descuento"
            document.querySelector("#descuento").innerHTML = `$ ${numeroFormateado}`
            document.querySelector("#valor-con-descuento").innerHTML = `$ ${total.toLocaleString('es-ES')}`
            document.querySelector("#precio-total").classList.add('text-decoration-line-through', "text-muted")
        } else {
            document.querySelector("#divDescuento").classList.add('d-none')
            document.querySelector("#texto-total").innerHTML = "Total a pagar"
            document.querySelector("#descuento").innerHTML = `$ 0`
            document.querySelector("#precio-total").classList.remove('text-decoration-line-through', "text-muted")
            total = valorCompra
        }
        document.querySelector("#valoriH").value = total

    }
}

document.querySelector("#envioNormal").addEventListener("click", (e) => {
    let valorCompra = document.querySelector("#valoriH").value
    if (estadoEnvioNormal == false) {
        valorCompra = parseInt(valorCompra) - 5000
        document.querySelector("#valoriH").value = valorCompra
    }
    estadoEnvioNormal = e.target.checked
    estadoEnvioPrioritario = document.querySelector("#envioPrioritario").checked

    let spanPrecioTotal = document.querySelector("#precio-total")
    spanPrecioTotal.innerHTML = `$ ${valorCompra.toLocaleString('es-ES')}`
})

document.querySelector("#envioPrioritario").addEventListener("click", (e) => {
    let valorCompra = document.querySelector("#valoriH").value
    if (estadoEnvioPrioritario == false) {
        valorCompra = parseInt(valorCompra) + 5000
        document.querySelector("#valoriH").value = valorCompra
    }
    estadoEnvioNormal = document.querySelector("#envioNormal").checked
    estadoEnvioPrioritario = e.target.checked

    let spanPrecioTotal = document.querySelector("#precio-total")
    spanPrecioTotal.innerHTML = `$ ${valorCompra.toLocaleString('es-ES')}`
})

// function actualizarTotal() {
//     let numeroFormateado
//     let productosAgregados = JSON.parse(localStorage.getItem('productosAgregados'))
//     let spanPrecioTotal = document.querySelector("#precio-total")
//     let contador = 0
//     productosAgregados.forEach(productoLS => {
//         let precioXProducto = productoLS.precio * productoLS.cantidad
//         contador = contador + precioXProducto
//         numeroFormateado = contador.toLocaleString('es-ES');
//     });
//     spanPrecioTotal.innerHTML = `$ ${numeroFormateado}`
// }


function llamadaFunciones() {
    let productosAgregados = JSON.parse(localStorage.getItem('productosAgregados'))
    listarProductos()
    asignarEvento()
    if (productosAgregados != null && productosAgregados.length > 0) {
        actualizarCantidad('cantidadProductos')
        actualizarCantidad('precioTotal')
        actualizarCantidad('descuento')
    }
}


document.querySelector("#pagoTC").addEventListener("click", () => {
    document.querySelector("#form-tarjeta").classList.remove('d-none')
})

let opcionNormal = document.querySelectorAll(".opcionNoTC")
opcionNormal.forEach(opcion => {
    opcion.addEventListener("click", () => {
        let btnPago = document.querySelector("#btnPagar")

        if (opcion.id == "pagoContraentrega") {
            btnPago.setAttribute("data-bs-toggle", "modal")
            btnPago.setAttribute("data-bs-target", "#exampleModal")
        } else if (opcion.id == 'pagoTransferencia') {
            btnPago.addEventListener("click", () => {
                location.href = "https://google.com"
            })
            btnPago.removeAttribute("data-bs-toggle")
            btnPago.removeAttribute("data-bs-target")
        } else {
            btnPago.removeAttribute("data-bs-toggle")
            btnPago.removeAttribute("data-bs-target")
        }

        document.querySelector("#form-tarjeta").classList.add('d-none')
    })
});