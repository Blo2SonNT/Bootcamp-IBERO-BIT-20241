document.querySelector("#btn-regresar").addEventListener("click", () => {
    location.href = "index.html"
})


let lista = document.querySelector('#lista-productos')
let productosCarrito = JSON.parse(localStorage.getItem('productosAgregados'))
for (const producto of productosCarrito) {
    lista.innerHTML += `
        <div class="card my-4">
            <div class="card-body d-flex justify-content-between">
                <div class="d-flex justify-content-center">
                    <img src="${producto.imagen}" class="imgProducto" alt="">
                    <div class="d-flex justify-content-center align-items-start flex-column ms-4">
                        <h5>${producto.nombre}</h5>
                        <h6 id="precioTotalProducto${producto.id}">$ ${producto.precio}</h6>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn botonControl mx-4" id="btnRestar${producto.id}" type="button" onclick="agregar_quitar_producto('restar', ${producto.cantidad}, ${producto.id})">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <h5 id="cantidadProducto${producto.id}">${producto.cantidad}</h5>
                    <button class="btn botonControl mx-4" id="btnSumar${producto.id}" type="button" onclick="agregar_quitar_producto('sumar', ${producto.cantidad}, ${producto.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `
}