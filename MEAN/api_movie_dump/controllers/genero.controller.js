let generoModel = require('../models/generos.model');


exports.crearGenero = async(req, res) => {
    try {
        let genero = new generoModel(req.body)
        await genero.save()
        res.status(200).send(genero)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al guardar el genero...");
    }
}


exports.consultarGeneros = async(req, res) => {
    try {
        const generoData = await generoModel.find()
        res.status(200).send(generoData)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar los generos");
    }
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
