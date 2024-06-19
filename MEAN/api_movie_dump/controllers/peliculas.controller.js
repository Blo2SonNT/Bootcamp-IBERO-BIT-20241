//cSpell:disable
const peliculaModel = require("../models/peliculas.model")

exports.crearPelicula = async(req, res) => {
    try {
        let pelicula = new peliculaModel(req.body);
        await pelicula.save();
        res.status(200).send(pelicula);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al guardar la pelicula");
    }
}

// exports.consultarUnaPeliculaFIX = async(req, res) => {
//     try {
//         let dataPelicula = await peliculaModel.findById(req.params.id)
//         if (!dataPelicula) {
//             return res.status(404).send({ msg: "No se encontró la pelicula" })
//         } else {
//             res.status(200).send(dataPelicula)
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un problema al consultar el genero");
//     }
// }


exports.consultarPeliculas = async(req, res) => {
    try {
        const peliculasData = await peliculaModel.find()
        res.status(200).send(peliculasData)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar las peliculas");
    }
}

exports.consultarUnaPelicula = async(req, res) => {
    //.find({nombre: /dead/i })
    let regexIdMongo = /^[0-9a-fA-F]{24}$/;
    let query = {}
    let busquedaXId = false;
    if (regexIdMongo.test(req.params.busqueda)) {
        query = { _id: req.params.busqueda }
        busquedaXId = true;
    } else {
        query = { titulo: new RegExp(req.params.busqueda, 'i') };
    }
    try {
        let peliculaData = await peliculaModel.find(query)
        if (peliculaData.length > 0) {
            if (busquedaXId) {
                // cuando es solo una busqueda por id, se envia solo el primer elemento como resultado sin el arreglo y sin objeto inicializado
                peliculaData = peliculaData[0];
                res.status(200).send(peliculaData)
            } else {
                res.status(200).send({ data: peliculaData })
            }
        } else {
            res.status(404).send({ mensaje: "No se encontró la pelicula", data: [] })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar las peliculas");
    }
}

exports.actualizarPelicula = async(req, res) => {
    try {
        const { titulo, genero, duracion, director, clasificacionR, imagen } = req.body;
        let peliculaData = await peliculaModel.findById(req.params.id)

        if (!peliculaData) {
            res.status(404).send({ mensaje: "No se encontró la pelicula" })
            return
        }

        peliculaData.titulo = titulo;
        peliculaData.genero = genero;
        peliculaData.duracion = duracion;
        peliculaData.imagen = imagen;
        peliculaData.director = director;
        peliculaData.clasificacionR = clasificacionR;

        await peliculaModel.findByIdAndUpdate(req.params.id, peliculaData);
        res.status(200).send({ mensaje: "Pelicula actualizada", peliculaData })

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al actualizar la pelicula");
    }
}


exports.borrarPelicula = async(req, res) => {
    try {
        let peliculaData = await peliculaModel.findById(req.params.id)
        console.log('peliculaData:', peliculaData)
        if (!peliculaData) {
            res.status(404).send({ mensaje: "No se encontró la pelicula" })
            return
        } else {
            await peliculaModel.findByIdAndDelete(req.params.id);
            res.status(200).send({ mensaje: "Pelicula eliminada" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al eliminar la pelicula");
    }
}
