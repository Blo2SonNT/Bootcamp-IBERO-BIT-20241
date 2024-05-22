// let registros = [
//     { nombre: 'Juan', apellido: 'Perez', edad: 22, documento: '999258789', clave: '1234' },
//     { nombre: 'Maria', apellido: 'Gomez', edad: 33, documento: '8761115', clave: '1234' },
//     { nombre: 'Carlos', apellido: 'Gonzalez', edad: 44, documento: '1234567876', clave: '1234' },
//     { nombre: 'Ana', apellido: 'Garcia', edad: 55, documento: '545678932', clave: '1234' },
//     { nombre: 'Lucia', apellido: 'Gutierrez', edad: 66, documento: '0976543', clave: '1234' }
// ]

// class Registro {
//     fecha = new Date()
//     constructor(nombre, apellido, edad, documento, clave) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.documento = documento
//         this.clave = clave
//     }


//     verificar_documento() {
//         let existe = registros.find(registro => registro.documento === this.documento)
//         if (existe == undefined) {
//             this.guardar_registro()
//         } else {
//             console.log('El documento ya existe')
//         }

//     }

//     guardar_registro() {
//         let persona = {
//             nombre: this.nombre,
//             apellido: this.apellido,
//             edad: this.edad,
//             documento: this.documento,
//             clave: this.clave
//         }

//         registros.push(persona)
//         console.log('Registro guardado')
//         console.log(registros);
//     }


//     nombre_completo() {
//         return `${this.nombre} ${this.apellido}`
//     }

// }


// class Bienvenida extends Registro {

//     constructor(nombre, apellido, edad, documento, clave, direccion, telefono){
//         super(nombre, apellido, edad, documento, clave)
//         this.direccion = direccion
//         this.telefono = telefono
//     }

//     dar_bienvenida() {
//         console.log(`Bienvenido ${this.nombre_completo()}`)
//         console.log(`Su pedido llegara ${this.direccion}`);
//     }

// }


// let registro = new Registro('Juan', 'Perez', 22, '999258789', '1234')
//     //si se registra
// registro.verificar_documento()
//     // si actualiza datos
// registro.guardar_registro()


// let bienve = new Bienvenida('Juan', 'Perez', 22, '999258789', '1234', 'cll falsa 123', '3142539731')
// bienve.verificar_documento()



class ejemplo1 {
    constructor(nombre, edad, color) {
        this.nombre = nombre
        this.edad = edad
        this.color = color
    }

    saludar() {
        return `Hola ${this.nombre}`
    }
}

class ejemplo2 extends ejemplo1 {

    constructor(nombre) {
        super(nombre)
    }

    saludar() {
        console.log(super.saludar());
        console.log(`Hola desde ejemplo 2 ${this.nombre}`);
    }
}

class ejemplo3 extends ejemplo2 {

    constructor(nombre, edad, color) {
        super(nombre)
        this.edad = edad
    }



}

let pepe = new ejemplo3('henry')
pepe.saludar()