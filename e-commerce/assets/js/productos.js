//cSpell:disable

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


let productosAgregados = []

if (localStorage.getItem("productosAgregados") != null) {
    productosAgregados = JSON.parse(localStorage.getItem("productosAgregados"))
}

let infojson = fetch("assets/js/productos.json")
    .then(response => response.json())
    .then(data => {
        let divContenedor = document.querySelector("#grilla-productos")
        for (const producto of data.base_productos) {
            divContenedor.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
                        <button type="button" class="btn btn-primary" data-idp="${producto.id}">Comprar</button>
                    </div>
                </div>
            </div>
            `

        }


        let botones = document.querySelectorAll("[data-idp]")

        botones.forEach(boton => {
            boton.addEventListener("click", (e) => {
                let idProducto = e.target.dataset.idp
                let producto = data.base_productos.find(p => p.id == idProducto)
                let validacionProducto = productosAgregados.findIndex(p => p.id == idProducto)

                if (validacionProducto != -1) {
                    productosAgregados[validacionProducto].cantidad += 1
                    productosAgregados.splice(validacionProducto, 1, productosAgregados[validacionProducto])
                } else {
                    producto.cantidad = 1
                    productosAgregados.push(producto)
                }
                localStorage.setItem("productosAgregados", JSON.stringify(productosAgregados))
                actualizarBadge()

                Toast.fire({
                    icon: "success",
                    title: "Producto agregado"
                });
            })
        })

        actualizarBadge()

    })

function actualizarBadge() {
    let cantidadBadge = document.querySelector("#cantidad-actual-productos")
    let contador = 0
    productosAgregados.forEach(productoLS => {
        contador = contador + productoLS.cantidad
    });
    cantidadBadge.innerHTML = contador
}


document.querySelector("#redireccion").addEventListener("click", () => {
    location.href = "resumen-compra.html"
})