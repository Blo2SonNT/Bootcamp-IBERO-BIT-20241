const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hola mundo con pepitos!</h1>')
    res.end()
})

servidor.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})