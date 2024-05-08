//cSpell:disable
let divGrillaPagina = document.querySelector('#grilla-personajes')
let url_api = 'https://rickandmortyapi.com/api/character'
let dataAPI = fetch(url_api)
dataAPI.then(respuestaPromesa => respuestaPromesa.json())
    .then(infojson => {
        infojson.results.forEach(personaje => {
            let cssEstado = ''
            if (personaje.status == 'Alive') {
                personaje.status = 'Vivido 🌟'
                cssEstado = 'vivo'
            } else if (personaje.status == 'Dead') {
                personaje.status = 'Morido ☠️'
                cssEstado = 'muerto'
            } else {
                personaje.status = 'Desconocido 🤷‍♂️'
                cssEstado = 'desconocido'
            }
            divGrillaPagina.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${personaje.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <ul>
                            <li class="d-flex justify-content-around align-items-center"> <strong> Estado: </strong> ${personaje.status} 
                                <div class="circulo_estado ${cssEstado}"></div> 
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            `
        });

    }).catch(error => {
        console.log(error)
    })



// *******************************************************
// ********************* POKEAPI *************************
// *******************************************************

/*
    1. Tratar de listar los persoanjes de la API de Pokemon
    2. Crear los botones de siguiente y anterior, manipulando la api de pokemon

    https://pokeapi.co/api/v2/pokemon


*/

// let url_pokeapi = 'https://pokeapi.co/api/v2/pokemon'
// let dataAPI_pokeapi = fetch(url_pokeapi)
// dataAPI_pokeapi.then(respuestaPromesa => respuestaPromesa.json())
//     .then(infojson => {
//         infojson.results.forEach(element => {
//             let urlPokemon = element.url
//             console.log('urlPokemon:', urlPokemon)
//             let consumoPokemon = fetch(urlPokemon)
//             consumoPokemon.then(respuestaPromesa => respuestaPromesa.json())
//                 .then(infoPokemon => {
//                     console.log(infoPokemon)
//                 }).catch(error => {
//                     console.log(error)
//                 })
//         });
//     }).catch(error => {
//         console.log(error)
//     })