const express = require('express'); //llamamos a Express
const router = express.Router(); //definimos una instancia de express
const peliculaController = require('../controllers/peliculas.controller')
const generoController = require('../controllers/genero.controller')

// definimos una ruta simple para el home a manera de prueba
router.get('/consultar-peliculas', peliculaController.consultarPeliculas)
router.get('/consultar-una-pelicula', peliculaController.consultarUnaPelicula)
router.put('/actualizar-pelicula', peliculaController.actualizarPelicula)
router.delete('/borrar-pelicula', peliculaController.borrarPelicula)
router.post('/crear-pelicula', peliculaController.crearPelicula)


router.get('/generos', generoController.consultarGeneros)
router.get('/genero', generoController.consultarUnGenero)
router.put('/actualizar-genero', generoController.actualizarGenero)
router.delete('/borrar-genero', generoController.borrarGenero)
router.post('/crear-genero', generoController.crearGenero)


module.exports = router; //exportamos el módulo
