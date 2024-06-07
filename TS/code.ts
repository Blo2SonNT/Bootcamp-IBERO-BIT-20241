console.log('Hola mundo desde TS');

let nombre:string = 'Juan'
let edad:number = 32
let casado:boolean = false
let fechaNacimiento:Date = new Date()


let vacio: void = undefined
let nulo: null = null
let indefinido: undefined = undefined


let x: any = 'hola'

let transmilenio: any[] = ["hola", "mundo", 4, true, {}, []]
let numeros: number[] = [1, 2, 3, 4, 5]

let metro : [string, number, string][] = [
    ['hola', 1, 'mundo'], 
    ['hola', 2, 'mundo'], 
    ['hola', 3, 'mundo'],
    ['hola', 4, 'mundo'], 
    ['hola', 5, 'mundo']
]

interface hechizosMago{
    nombre: string,
    poder: number
    damage: number
}

interface harrypotter{
    nombre: string,
    apellido: string,
    edad: number,
    casa: string,
    hechizos: hechizosMago[],
    muggle: boolean
}

interface dobby{
    nombre: string,
    familia: string,
    calcetas: boolean
}


let Hermione : harrypotter = {
    nombre: 'Hermione',
    apellido: 'Granger',
    edad: 20,
    casa: 'Gryffindor',
    hechizos: [
        {nombre: 'Expelliarmus', poder: 10, damage: 5},
        {nombre: 'Expecto Patronum', poder: 15, damage: 10},
        {nombre: 'Wingardium Leviosaaaaa', poder: 5, damage: 2}
    ],
    muggle: false
}

let Ron : harrypotter = {
    nombre: 'Ron',
    apellido: 'Weasley',
    edad: 20,
    casa: 'Gryffindor',
    hechizos: [
        {nombre: 'Expelliarmus', poder: 10, damage: 5},
        {nombre: 'Expecto Patronum', poder: 15, damage: 10},
        {nombre: 'Wingardium Leviosaaaaa', poder: 5, damage: 2}
    ],
    muggle: false
}


function prisioneroAzkaban(personajes:harrypotter[] | dobby[] | string[]) : string[]{
    let la_banda : string[] = []
    personajes.forEach(personaje => {
        la_banda.push(personaje.nombre)
    });
    return la_banda
}


prisioneroAzkaban([Hermione, Ron])


class Mago{
    nombre: string
    apellido: string
    edad: number
    casa: string
    hechizos: hechizosMago[]
    muggle: boolean

    constructor(nombre:string, apellido:string, edad:number, casa:string, hechizos:hechizosMago[], muggle:boolean){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.casa = casa
        this.hechizos = hechizos
        this.muggle = muggle
    }

    prisioneroAzkaban() : string[]{
        let la_banda : string[] = []
        this.hechizos.forEach(hechizo => {
            la_banda.push(hechizo.nombre)
        });
        return la_banda
    }

    esta_vivo() : any{
        return true
    }

}

class conjuros extends Mago{
    constructor(nombre:string, apellido:string, edad:number, casa:string, hechizos:hechizosMago[], muggle:boolean){
        super(nombre, apellido, edad, casa, hechizos, muggle)
    }

    esta_vivo() : any{
        return false
    }
}

let pelicula = new conjuros('Harry', 'Potter', 20, 'Gryffindor', Hermione.hechizos, false)
console.log(pelicula.esta_vivo());
