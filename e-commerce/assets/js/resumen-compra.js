let productos = [{
        id: 1,
        nombre: "Control inalámbrico para PC",
        precio: 210000,
        imagen: "assets/img/producto1.webp",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Teclado retroiluminado RGB multicolor",
        precio: 382000,
        imagen: "assets/img/producto2.webp",
        cantidad: 3
    },
    {
        id: 3,
        nombre: "Mouse ergonomico",
        precio: 90000,
        imagen: "assets/img/producto3.webp",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Auriculares inalámbricos",
        precio: 150000,
        imagen: "https://via.placeholder.com/100x100",
        cantidad: 2
    }
]
console.table(productos);
let divListaProductos = document.querySelector("#lista-productos")

productos.forEach(productoLista => {
    divListaProductos.innerHTML += `
        <div class="card my-4">
            <button type="button" class="btn-close botonQuitar" data-bs-dismiss="alert" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar producto"></button>
            <div class="card-body d-flex justify-content-between">
                <div class="d-flex justify-content-center">
                    <img src="${productoLista.imagen}" class="imgProducto" alt="">
                    <div class="d-flex justify-content-center align-items-start flex-column ms-4">
                        <h5>${productoLista.nombre}</h5>
                        <h6>$ ${productoLista.precio}</h6>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn botonControl mx-4" id="btnRestar${productoLista.id}" type="button" onclick="agregar_quitar_producto('restar', ${productoLista.cantidad}, ${productoLista.id})">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <h5 id="cantidadProducto${productoLista.id}">${productoLista.cantidad}</h5>
                    <button class="btn botonControl mx-4" id="btnSumar${productoLista.id}" type="button" onclick="agregar_quitar_producto('sumar', ${productoLista.cantidad}, ${productoLista.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `
});

function agregar_quitar_producto(operacion, cantidadActual, id) {
    let indiceProducto
    switch (operacion) {
        case 'sumar':
            cantidadActual = cantidadActual + 1
            document.querySelector(`#cantidadProducto${id}`).innerHTML = cantidadActual
            indiceProducto = productos.findIndex(producto => producto.id === id)
            productos[indiceProducto].cantidad = cantidadActual
            document.querySelector(`#btnSumar${id}`).setAttribute('onclick', `agregar_quitar_producto('sumar', ${cantidadActual}, ${id})`)
            document.querySelector(`#btnRestar${id}`).setAttribute('onclick', `agregar_quitar_producto('restar', ${cantidadActual}, ${id})`)
            break;
        case 'restar':
            cantidadActual = cantidadActual - 1;
            if (cantidadActual < 1) {
                cantidadActual = 1
            }
            document.querySelector(`#cantidadProducto${id}`).innerHTML = cantidadActual
            indiceProducto = productos.findIndex(producto => producto.id === id)
            productos[indiceProducto].cantidad = cantidadActual;
            document.querySelector(`#btnSumar${id}`).setAttribute('onclick', `agregar_quitar_producto('sumar', ${cantidadActual}, ${id})`)
            document.querySelector(`#btnRestar${id}`).setAttribute('onclick', `agregar_quitar_producto('restar', ${cantidadActual}, ${id})`)
            break;
    }
    console.table(productos);
}

document.querySelector("#btn-borrar-carro").addEventListener("click", () => {
    productos = []
    divListaProductos.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Carrito vacío</strong> No tienes productos en tu carrito de compras.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `
    console.table(productos)
})

let botonesEliminarProducto = document.querySelectorAll(".botonQuitar")
botonesEliminarProducto.forEach(boton => {
    boton.addEventListener("click", () => {
        Swal.fire({
            title: "Esta seguro de eliminar el producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {



                //Eliminar el producto del DOM y del array



                Swal.fire({
                    title: "Borrado!",
                    text: "Puedes agregarlo desde la vista de productos mas tarde si asi lo deseas",
                    icon: "success"
                });


            }
        });
    })
})