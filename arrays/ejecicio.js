let lista = []
document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault()

    // * Con IndexOf
    let inputNuevoElemento = evento.target.elemento.value
    let validacionIndexOf = lista.indexOf(inputNuevoElemento)
    console.log('validacionIndexOf:', validacionIndexOf)
    let posicionInput = evento.target.posicion.value
    if (posicionInput == '') {
        if (validacionIndexOf == -1) {
            lista.push(inputNuevoElemento)
        } else {
            alert('El valor ya existe en el array')
        }
    } else {
        // let validacionPosicion = lista.indexOf(posicionInput)
        // if (validacionPosicion != -1) {
        //     lista.splice(validacionPosicion + 1, 0, inputNuevoElemento)
        // } else {
        //     alert('El elemento especificado no existe en el array')
        // }

        let cantidadElementos = lista.length
        console.log('cantidadElementos:', cantidadElementos)
        if (posicionInput <= cantidadElementos) {
            lista.splice(posicionInput, 0, inputNuevoElemento)
        } else {
            alert('El numero especificado es mayor a la cantidad de elementos en el array')
        }

    }
    console.log(lista);

    // * Con FindIndex
    // let inputNuevoElemento = evento.target.elemento.value
    // let validacionIndexOf = lista.findIndex(elemento => elemento == inputNuevoElemento)
    // console.log('validacionIndexOf:', validacionIndexOf)
    // let posicionInput = evento.target.posicion.value
    // if (posicionInput == '') {
    //     if (validacionIndexOf == -1) {
    //         lista.push(inputNuevoElemento)
    //     } else {
    //         alert('El valor ya existe en el array')
    //     }
    // }
    // console.log(lista);


    let divHTML = document.querySelector("#Lista_elementos")
    divHTML.innerHTML = ""
    lista.forEach((element, posicion) => {
        divHTML.innerHTML += `<p>${posicion+1} - ${element}</p>`
    });

})