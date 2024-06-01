const usuarioModel = require('../models/usuario.model');

exports.crearUsuario = async(req, res) => {
    try {
        let usuario = new usuarioModel(req.body);
        await usuario.save();
        res.status(200).send({ mensaje: 'Usuario creado correctamente', usuario });
    } catch (error) {

    }
}


exports.consultarUsuarios = async(req, res) => {
    try {
        const usuarioData = await usuarioModel.find()
        res.status(200).send(usuarioData)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar los usuarios");
    }
}
