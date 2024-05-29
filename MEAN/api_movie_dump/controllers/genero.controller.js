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

exports.crearGenero = (req, res) => {
    console.log(req.body);
    res.send("Estamos creando un genero..."); //enviamos la información
}
