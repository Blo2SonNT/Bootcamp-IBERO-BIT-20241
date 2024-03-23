let productos = [{
        nombre: "Pan de la abuela",
        precio: 3500,
        cantidad: 40,
        imagen: "assets/img/productos/2.jpeg"
    },
    {
        nombre: "Pan rolo",
        precio: 500,
        cantidad: 100,
        imagen: "assets/img/productos/4.jpg"
    },
    {
        nombre: "Roscon",
        precio: 9000,
        cantidad: 10,
        imagen: "assets/img/productos/1.jpeg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
    {
        nombre: "Pan galleta",
        precio: 6000,
        cantidad: 8,
        imagen: "assets/img/productos/3.jpg"
    },
]

// let contenido = document.querySelector('#grilla-productos')

// for (let x = 0; x < productos.length; x++) {
//     contenido.innerHTML += `
//     <div class="col">
//         <div class="card">
//             <img src="${productos[x].imagen}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${productos[x].nombre}</h5>
//                 <h3>$ ${productos[x].precio}</h3>
//                 <button type="button" class="btn btn-secondary fw-bold w-100 mb-2">Ver detalles</button>
//                 <button type="button" class="btn btn-warning fw-bold w-100">Agregar al carrito</button>
//             </div>
//         </div>
//     </div>
//     `

// }

// contenido.innerHTML = "<h1>asdasd</h1>"


// let numeros = [1, 5, 676, 234, 7897, ]
// for (let i = 0; i < numeros.length; i++) {
//     contenido.innerHTML += `<li>iterador -> ${i}        pasajero ->${numeros[i]}</li>`
// }

// while (condition) {
//     if(si es par){

//     }else{

//     }
// }
let contenido = document.querySelector('#grilla-productos')

let numero_secuencia = 10

while (numero_secuencia != 1) {
    if (numero_secuencia % 2 == 0) {
        numero_secuencia = numero_secuencia / 2
    } else {
        numero_secuencia = (numero_secuencia * 3) + 1
    }
    contenido.innerHTML += `${numero_secuencia} <br>`
}