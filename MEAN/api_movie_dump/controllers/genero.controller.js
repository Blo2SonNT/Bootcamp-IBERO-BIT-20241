let Genero = require('../models/generos.model');


exports.crearGenero = async(req, res) => {
    try {
        let genero = new Genero(req.body)
        await genero.save()
        res.status(200).send(genero)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al guardar el genero...");
    }
}


exports.consultarGeneros = (req, res) => {
    res.send("Estos son mis generos..."); //enviamos la información
}

exports.consultarUnGenero = (req, res) => {
    res.send("Este es mi genero xxxxxx"); //enviamos la información
}

exports.actualizarGenero = (req, res) => {
    res.send("Estamos actualizando el genero..."); //enviamos la información
}

exports.borrarGenero = (req, res) => {
    res.send("Estamos borrando un genero..."); //enviamos la información
}