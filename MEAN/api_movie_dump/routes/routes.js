//cSpell:disable
const express = require('express'); //llamamos a Express
const router = express.Router(); //definimos una instancia de express
const peliculaController = require('../controllers/peliculas.controller')
const generoController = require('../controllers/genero.controller')
const usuarioController = require('../controllers/usuario.controller')

// definimos una ruta simple para el home a manera de prueba
router.post('/crear-pelicula', peliculaController.crearPelicula)
router.get('/listar-peliculas', peliculaController.consultarPeliculas)
router.get('/buscar-pelicula/:busqueda', peliculaController.consultarUnaPelicula)
    // router.get('/buscar-pelicula-FIX/:id', peliculaController.consultarUnaPeliculaFIX)
router.delete('/borrar-pelicula/:id', peliculaController.borrarPelicula)
router.put('/actualizar-pelicula/:id', peliculaController.actualizarPelicula)

router.post('/crear-genero', generoController.crearGenero)
router.get('/listar-generos', generoController.consultarGeneros)
router.delete('/borrar-genero/:id', generoController.borrarGenero)
router.get('/buscar-genero/:id', generoController.consultarUnGenero)
router.put('/actualizar-genero/:id', generoController.actualizarGenero)



router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/listar-usuarios', usuarioController.consultarUsuarios)

module.exports = router; //exportamos el módulo
