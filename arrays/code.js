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