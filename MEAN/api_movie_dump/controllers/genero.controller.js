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

exports.consultarUnGenero = async(req, res) => {
    try {
        let dataGenero = await generoModel.findById(req.params.id)
        if (!dataGenero) {
            return res.status(404).send({ msg: "No se encontró el genero" })
        } else {
            res.status(200).send(dataGenero)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar el genero");
    }
}

exports.actualizarGenero = async (req, res) => {
    try {
		const { nombre } = req.body
		let dataGenero = await generoModel.findById(req.params.id)
		if(!dataGenero){
			return res.status(404).send({msg: "genero no encontrado"})
		}else{
			dataGenero.nombre = nombre
			await generoModel.findByIdAndUpdate(req.params.id, dataGenero)
			return res.status(200).send({ mensaje: "Genero actualizado", dataGenero })
		}
	} catch (error) {
		console.log(error);
        res.status(500).send("Hubo un problema al consultar el genero");
	}
}

exports.borrarGenero = async(req, res) => {
    try {
        let dataGenero = await generoModel.findById(req.params.id)
        if (!dataGenero) {
            return res.status(404).send("No se encontró el genero")
        } else {
            await generoModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ msg: "Genero eliminado correctamente" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al eliminar el genero");
    }
}
