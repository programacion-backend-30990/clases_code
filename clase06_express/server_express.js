const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.get("/", (request, response) => {
    response.send(
        "<h1 style='color: blue;'>Bienvenidos a la super clase de servidores</h1>"
    )
})


let count = 0
app.get("/visitas", (request, response) => {
    count++
    response.send("La cantidad de visitas es: " + count)
})

app.get("/fyh", (request, response) => {
    let fyh = new Date()
    response.send({ fyh: fyh.toLocaleString() })
})



const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
server.on('error', error => console.log('Error on server', error))