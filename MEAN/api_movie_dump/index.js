const express = require('express'); //llamamos a Express
const conectarDB = require('./config/db'); //llamamos a la conexión de la base de datos
const cors = require('cors'); //llamamos a Cors
const app = express(); //definimos una instancia de express

conectarDB(); //conectamos la base de datos

app.use(cors()) //usamos cors
app.use(express.json()) //usamos json

app.use('/api/v1', require('./routes/routes'))

// Creamos el servidor
app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en http://localhost:3000');
});