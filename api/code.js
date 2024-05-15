//cSpell:disable

// let btnP = document.querySelector('#btnPrev')
// let btnN = document.querySelector('#btnNext')

// btnP.setAttribute('data-url-personajes', '')
// btnN.setAttribute('data-url-personajes', 'https://rickandmortyapi.com/api/character?page=2')

// btnN.addEventListener('click', function(e) {
//     let url = e.target.getAttribute('data-url-personajes')
//     if (url != 'null') {
//         listar_personajes(e.target.dataset.urlPersonajes)
//     }
// })

// btnP.addEventListener('click', function(e) {
//     if (e.target.dataset.urlPersonajes != 'null') {
//         listar_personajes(e.target.dataset.urlPersonajes)
//     }
// })


// listar_personajes()

// function listar_personajes(url_api = 'https://rickandmortyapi.com/api/character') {
//     let divGrillaPagina = document.querySelector('#grilla-personajes')
//     divGrillaPagina.innerHTML = ''
//     let dataAPI = fetch(url_api)
//     dataAPI.then(respuestaPromesa => respuestaPromesa.json())
//         .then(infojson => {
//             infojson.results.forEach(personaje => {
//                 let cssEstado = ''
//                 if (personaje.status == 'Alive') {
//                     personaje.status = 'Vivido 🌟'
//                     cssEstado = 'vivo'
//                 } else if (personaje.status == 'Dead') {
//                     personaje.status = 'Morido ☠️'
//                     cssEstado = 'muerto'
//                 } else {
//                     personaje.status = 'Desconocido 🤷‍♂️'
//                     cssEstado = 'desconocido'
//                 }
//                 divGrillaPagina.innerHTML += `
//             <div class="col">
//                 <div class="card">
//                     <img src="${personaje.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${personaje.name}</h5>
//                         <ul>
//                             <li class="d-flex justify-content-around align-items-center"> <strong> Estado: </strong> ${personaje.status} 
//                                 <div class="circulo_estado ${cssEstado}"></div> 
//                             </li>
//                         </ul> 
//                     </div>
//                 </div>
//             </div>
//             `
//             });

//             btnP.setAttribute('data-url-personajes', infojson.info.prev)
//             btnN.setAttribute('data-url-personajes', infojson.info.next)


//         }).catch(error => {
//             console.log(error)
//         })

// }


// *******************************************************
// ********************* POKEAPI *************************
// *******************************************************

/*
    1. Tratar de listar los persoanjes de la API de Pokemon
    2. Crear los botones de siguiente y anterior, manipulando la api de pokemon

    https://pokeapi.co/api/v2/pokemon


*/


// * MANERA FACIL PERO NO IDEAL

/*


let divGrillaPagina = document.querySelector('#grilla-personajes')
let url_api = 'https://pokeapi.co/api/v2/pokemon'
let dataAPI = fetch(url_api)
dataAPI.then(respuestaPromesa => respuestaPromesa.json())
    .then(infoPokemon => {
        infoPokemon.results.forEach(enlacePokemon => {
            let urlInfoPokemon = enlacePokemon.url
            let data = fetch(urlInfoPokemon)
            data.then(respuestaPromesa => respuestaPromesa.json())
                .then(pokemonInformacion => {

                    let liTipos = ''
                    pokemonInformacion.types.forEach(dataTipo => {
                        liTipos += `<li>${dataTipo.type.name}</li>`
                    });

                    let barrasEstadisticas = ''
                    pokemonInformacion.stats.forEach(dataStats => {
                        if (dataStats.stat.name == 'hp') {
                            barrasEstadisticas += `<div> vida: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-warning" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
                        } else if (dataStats.stat.name == 'attack') {
                            barrasEstadisticas += `<div> ataque: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-danger" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
                        } else if (dataStats.stat.name == 'defense') {
                            barrasEstadisticas += `<div> defensa: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-primary" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
                        }
                    })


                    divGrillaPagina.innerHTML += `
                    <div class="col">
                        <div class="card">


                        <div id="carruselPokemo_${pokemonInformacion.id}" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${pokemonInformacion.sprites.other["official-artwork"].front_default}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${pokemonInformacion.sprites.other.home.front_default}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${pokemonInformacion.sprites.other.home.front_shiny}" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">${pokemonInformacion.name}</h5>
                            <ul>
                                ${liTipos}
                            </ul> 
                        </div>

                        <div class="px-3 pb-4">
                            ${barrasEstadisticas}
                        </div>

                        </div>
                    </div>
                    `
                })
        });
    })

*/



// * MANERA AUN MAS FACIL E IDEAL

let divGrillaPagina = document.querySelector('#grilla-personajes')
async function obtenerPokemones() {
    let url_api = 'https://pokeapi.co/api/v2/pokemon'
    let dataAPI = await fetch(url_api)
    let infoPokemon = await dataAPI.json()
    let arrPokemones = infoPokemon.results

    for (const pokemon of arrPokemones) {
        let info = await fetch(pokemon.url)
        let pokemonInformacion = await info.json()


        let liTipos = ''
        pokemonInformacion.types.forEach(dataTipo => {
            liTipos += `<li>${dataTipo.type.name}</li>`
        });

        let barrasEstadisticas = ''
        pokemonInformacion.stats.forEach(dataStats => {
            if (dataStats.stat.name == 'hp') {
                barrasEstadisticas += `<div> vida: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            } else if (dataStats.stat.name == 'attack') {
                barrasEstadisticas += `<div> ataque: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            } else if (dataStats.stat.name == 'defense') {
                barrasEstadisticas += `<div> defensa: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-primary" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            }
        })


        divGrillaPagina.innerHTML += `
        <div class="col">
            <div class="card">


            <div id="carruselPokemo_${pokemonInformacion.id}" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${pokemonInformacion.sprites.other["official-artwork"].front_default}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${pokemonInformacion.sprites.other.home.front_default}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${pokemonInformacion.sprites.other.home.front_shiny}" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="card-body">
                <h5 class="card-title">${pokemonInformacion.name}</h5>
                <ul>
                    ${liTipos}
                </ul> 
            </div>

            <div class="px-3 pb-4">
                ${barrasEstadisticas}
            </div>

            </div>
        </div>
        `



    }

}


obtenerPokemones()