const express = require('express')
const { assertCompositeType } = require('graphql')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const data = [
    {id: 1, msg: 'Saludos a Francisco Fernandez', name: 'r2'},
    {id: 2, msg: 'Saludos a Pedro Parque', name: 'pp'}
]

app.get('/', (req, res) => res.send('OK') )

app.get('/api/mensajes', (req, res) => {

    if( Object.entries(req.query).length > 0) {

        res.json(data.filter(d => d.name == req.query.name))
    } else {

        res.json(data)
    }

})

app.get('/api/mensajes/:id', (req, res) => {
    const id = req.params.id

    res.json(data.find(d => d.id == id))
})

app.post('/api/mensajes', (req, res) => {
    data.push(req.body)

    res.send("Se agrego nuevo mensaje")
})

app.delete('/api/mensajes/:id', (req, res) => {
    const id = Number(req.params.id)
    const idx = data.findIndex(d => d.id == id)
    data.splice(idx, 1)

    res.send("Eliminado con exito")
})













const server = app.listen(8080, () => {
    console.log("Server listening...")
})
server.on('error', e => {
    console.log('Error on server', e)
})