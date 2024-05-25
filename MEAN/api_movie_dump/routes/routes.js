const express = require('express'); //llamamos a Express
const router = express.Router(); //definimos una instancia de express
const peliculaController = require('../controllers/peliculas.controller')

// definimos una ruta simple para el home a manera de prueba
router.get('/consultar-peliculas', peliculaController.consultarPeliculas)
router.get('/consultar-una-pelicula', peliculaController.consultarUnaPelicula)
router.put('/actualizar-pelicula', peliculaController.actualizarPelicula)





router.delete('/borrar-pelicula', (req, res) => {
    res.send("Estamos borrando algo..."); //enviamos la información
})

router.post('/crear-pelicula', (req, res) => {
    console.log(req.body);
    res.send("Estamos creando algo..."); //enviamos la información
})

module.exports = router; //exportamos el módulo