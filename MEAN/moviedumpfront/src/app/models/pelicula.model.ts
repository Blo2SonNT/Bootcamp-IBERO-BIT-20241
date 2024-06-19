// export class Pelicula{
//     _id?: string
//     titulo: string
//     genero:string
//     duracion:string
//     director:string
//     clasificacion:string
//     imagen:string

//     constructor(titulo: string, genero: string, duracion: string, director: string, clasificacion: string, imagen: string){
//         this.titulo = titulo
//         this.genero = genero
//         this.duracion = duracion
//         this.director = director
//         this.clasificacion = clasificacion
//         this.imagen = imagen
//     }

// }


export interface Pelicula {
    _id?: string,
    titulo: string,
    genero: string,
    duracion: string,
    director: string,
    clasificacion: string,
    imagen: string
}
