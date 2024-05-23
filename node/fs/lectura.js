const fs = require('fs')

fs.readFile('./ejemplo.csv', 'utf-8', (error, datos) => {
    if (error) {
        console.error('Error al leer el archivo:', error)
        return
    }
    let lineas = datos.split('\r')
    lineas = lineas.join().split(',')

    let encabezados = lineas[0].split(';')


    let datosFinales = []
    for (let i = 1; i < lineas.length; i++) {
        let linea = lineas[i].split(';')
        let objeto = {}
        for (let j = 0; j < encabezados.length; j++) {
            objeto[encabezados[j]] = linea[j]
        }
        datosFinales.push(objeto)
    }
    console.log(datosFinales);
})