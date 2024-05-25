exports.consultarPeliculas = (req, res) => {
    let info = [{
            nombre: 'Iron Man',
            genero: 'Accion',
            estudio: 'Marvel',
            lanzamiento: 2008
        },
        {
            nombre: 'Spiderman Vete de casa',
            genero: 'Accion',
            estudio: 'Yo',
            lanzamiento: 2028
        },
    ]
    res.send(info); //enviamos la información
}




exports.consultarUnaPelicula = (req, res) => {
    let info = {
        nombre: 'Iron Man',
        genero: 'Accion',
        estudio: 'Marvel',
        lanzamiento: 2008
    }
    res.send(info); //enviamos la información
}


exports.actualizarPelicula = (req, res) => {
    res.send("Estamos actualizando algo..."); //enviamos la información
}