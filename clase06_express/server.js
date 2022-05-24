const http = require('http')

const server = http.createServer((request, response) => {

    const date = new Date()

    response.end('La hora es: ' + date.toLocaleTimeString())
})

const connectedServer = server.listen(8080, () => {
    console.log(`Server http listeing on ${connectedServer.address().port} ....`)
})

