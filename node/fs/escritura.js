const fs = require('fs')

let logs = ` ESTO ES SOLO UN EJEMPLO :)
    127.0.0.1 - frank [10/Oct/2024:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
    127.0.0.1 - john [10/Oct/2024:14:05:32 -0700] "POST /login HTTP/1.1" 200 1234
    203.0.113.195 - - [10/Oct/2024:14:09:21 -0700] "GET /index.html HTTP/1.1" 404 209
    198.51.100.23 - jane [10/Oct/2024:14:10:56 -0700] "GET /about.html HTTP/1.1" 200 532
    192.0.2.44 - - [10/Oct/2024:14:12:34 -0700] "GET /contact.html HTTP/1.1" 200 342
    203.0.113.195 - - [10/Oct/2024:14:15:19 -0700] "GET /nonexistent.html HTTP/1.1" 404 204
    127.0.0.1 - frank [10/Oct/2024:14:20:36 -0700] "GET /apache_pb.gif HTTP/1.0" 304 0
    198.51.100.23 - jane [10/Oct/2024:14:25:14 -0700] "POST /submit_form HTTP/1.1" 500 150
`


fs.writeFile('./logs_system.txt', logs, (error) => {
    if (error) {
        console.log('Error:', error)
    } else {
        console.log('Archivo creado exitosamente')
    }
})