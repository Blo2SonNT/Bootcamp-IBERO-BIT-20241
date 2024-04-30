let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
console.log(estudiantes.length); //Saber la cantidad de elementos en un array
console.log("Accediendo a la posición 0: " + estudiantes[0]); //Acceder a un elemento de un array

estudiantes.forEach(persona => {
    if (persona == "Sergio") {
        console.log("Sergio no existe");
    } else {
        console.warn("La persona es diferente a sergio");
    }
});


let numero_usuario = 5
let numeros = [11, 26, 38, 43, 52];
// for (let x = 0; x < numeros.length; x++) {
//     console.log(numeros[x] + numero_usuario);
// }

numeros.forEach((numerito, pepe, gatito) => {
    console.log(numerito) //el valor
    console.log(pepe) //la posición
    console.log(gatito) //el array
});

console.clear();

//Métodos de manipulación arrays
let frutas = ["Manzana", "Banana", "Pera", "Naranja"];
console.log(frutas)
frutas.push("Fresa", "Kiwi", "Maracuya", "lulo") //Agrega un elemento al final del array
frutas.push("Mango")
console.log(frutas)


frutas.pop() //Elimina el último elemento del array
console.log(frutas)
frutas.pop()
console.log(frutas)

frutas.unshift("Uva", "Zapote", "Guayaba") //Agrega un elemento al principio del array
frutas.unshift("Mango")
console.log(frutas)
frutas.shift() //Elimina el primer elemento del array
console.log(frutas)

console.log(frutas.indexOf("Banana")); //Devuelve la posición de un elemento en el array

frutas.splice(frutas.indexOf("Naranja") + 1, 0, "limon", "mora") //Elimina elementos de un array
console.log(frutas);


console.clear();


let numeros2 = [134, 234, 121, 4, 567, 62, 733, 888, 88, 10];
console.log(numeros2);
numeros2.sort((a, b) => b - a); //Ordena los elementos de un array
console.log(numeros2);

let nombres = ["Juan", "Pedro", "Ana", "Maria", "Sergio", "Rosa", "Daniel"];
console.log(nombres);
nombres.sort();
console.log(nombres);


let numeros_letras = [675, "sdf", 23, "cgn", 37, "zz", 1, "xx", 0, "567", 23456];
console.log(numeros_letras.reverse());

let arr_numeros = []
let arr_letras = []

let regexNumeros = /^[0-9]*$/;

numeros_letras.forEach(element => {
    //el test nos permite validar si un string cumple con una expresión regular
    if (regexNumeros.test(element) == true) {
        element = parseInt(element);
    }
    // el operador typeof nos permite saber el tipo de dato de una variable
    if (typeof element === "number") {
        arr_numeros.push(element);
    } else {
        arr_letras.push(element);
    }
})

console.log(arr_numeros);
console.log(arr_letras);

document.querySelector("#ejemploValidacion").addEventListener("submit", (e) => {
    e.preventDefault();
    if (regexNumeros.test(e.target.soloNumeros.value)) {
        console.log("Es un número");
    } else {
        console.log("No es un número");
    }

    let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regexCorreo.test(e.target.correo.value)) {
        console.log("Correo válido");
    } else {
        console.log("Correo inválido");
    }

})

//PROGRAMACIÓN FUNCIONAL

//JAVIER y DAYANA

//filter nos permite filtrar elementos de un array
//findIndex nos permite encontrar la posición de un elemento en un array
//find nos permite encontrar un elemento en un array

let estudiantes_funcional = [
    { id: 1, nombre: "Maria", edad: 20 },
    { id: 2, nombre: "Sergio", edad: 25 },
    { id: 3, nombre: "Rosa", edad: 20 },
    { id: 4, nombre: "Sergio", edad: 18 }
]

console.log("find: ", estudiantes_funcional.find(persona => persona.id == 1))
console.log("findIndex: ", estudiantes_funcional.findIndex(persona => persona.nombre == "Sergio"))
console.log("filter: ", estudiantes_funcional.filter(persona => persona.nombre == "Sergio"))

estudiantes_funcional.forEach((element, posicion) => {
    if (element.nombre == "Sergio") {
        console.log("La posición de Sergio es: " + posicion);
    }
});


//PROGRAMACIÓN ORIENTADA A OBJETOS
//HENRY y JESAR