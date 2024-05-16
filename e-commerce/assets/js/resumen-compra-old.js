let productos = [{
        id: 15,
        nombre: "Control inalámbrico para PC",
        precio: 210000,
        imagen: "assets/img/producto1.webp",
        cantidad: 1
    },
    {
        id: 23,
        nombre: "Teclado retroiluminado RGB multicolor",
        precio: 381000,
        imagen: "assets/img/producto2.webp",
        cantidad: 3
    },
    {
        id: 11,
        nombre: "Mouse ergonomico",
        precio: 90000,
        imagen: "assets/img/producto3.webp",
        cantidad: 1
    },
    {
        id: 403,
        nombre: "Auriculares inalámbricos",
        precio: 150000,
        imagen: "https://via.placeholder.com/100x100",
        cantidad: 2
    }
]
console.table(productos)
let divProductos = document.querySelector("#lista-productos")
listar_productos()

function listar_productos() {
    divProductos.innerHTML = ""
    productos.forEach(productoCarrito => {
        divProductos.innerHTML += `
    <div class="card my-4">


        <button type="button" class="btn-close botonQuitar" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar producto" data-id-producto="${productoCarrito.id}"></button>


        <div class="card-body d-flex justify-content-between">
            <div class="d-flex justify-content-center">
                <img src="${productoCarrito.imagen}" class="imgProducto" alt="">
                <div class="d-flex justify-content-center align-items-start flex-column ms-4">
                    <h5>${productoCarrito.nombre}</h5>
                    <h6 id="precioTotalProducto${productoCarrito.id}">$ ${productoCarrito.precio}</h6>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn botonControl mx-4" id="btnRestar${productoCarrito.id}" type="button" onclick="agregar_quitar_producto('restar', ${productoCarrito.cantidad}, ${productoCarrito.id})">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <h5 id="cantidadProducto${productoCarrito.id}">${productoCarrito.cantidad}</h5>
                <button class="btn botonControl mx-4" id="btnSumar${productoCarrito.id}" type="button" onclick="agregar_quitar_producto('sumar', ${productoCarrito.cantidad}, ${productoCarrito.id})">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
    
    `


    });
}

function agregar_quitar_producto(accion, cantidad, id) {
    let resultado
    let h5Cantidad = document.querySelector(`#cantidadProducto${id}`)
    let btnSuma = document.querySelector(`#btnSumar${id}`)
    let btnResta = document.querySelector(`#btnRestar${id}`)
    let divPrecioProducto = document.querySelector(`#precioTotalProducto${id}`)
    let precioTotalProducto = parseInt(divPrecioProducto.innerText.split(" ")[1])

    switch (accion) {
        case "sumar":
            resultado = cantidad + 1
            precioTotalProducto = (precioTotalProducto / cantidad) * resultado
            divPrecioProducto.innerHTML = `$ ${precioTotalProducto}`
            h5Cantidad.innerHTML = resultado
            break;
        case "restar":
            resultado = cantidad - 1
            if (resultado < 1) {
                resultado = 1
            }
            precioTotalProducto = (precioTotalProducto / cantidad) * resultado
            divPrecioProducto.innerHTML = `$ ${precioTotalProducto}`
            h5Cantidad.innerHTML = resultado
            break;
    }
    let posicionProducto = productos.findIndex(producto => producto.id == id)
    productos[posicionProducto].cantidad = resultado
    console.table(productos)
    btnSuma.setAttribute("onclick", `agregar_quitar_producto('sumar', ${resultado}, ${id})`)
    btnResta.setAttribute("onclick", `agregar_quitar_producto('restar', ${resultado}, ${id})`)
}


// function calcular_valor_x_producto(precioTotalProducto, cantidad, resultado) {
//     return (precioTotalProducto / cantidad) * resultado
// }

crear_tooltip()


let botonesQuitarProducto = document.querySelectorAll(".botonQuitar")
botonesQuitarProducto.forEach(boton => {
    boton.addEventListener("click", () => {

        // let idProducto = boton.getAttribute("data-id-producto")
        let idProductoDATA = boton.dataset.idProducto

        let indiceProducto = productos.findIndex(producto => producto.id == idProductoDATA)
        console.log('indiceProducto:', indiceProducto)
        productos.splice(indiceProducto, 1)
        console.table(productos)
        listar_productos()

        // boton.parentElement.remove()
    })
})