const express = require('express')
const Contenedor = require('./contenedor')

const DBfile = 'products.json'
const PORT = process.env.PORT || 8080
const app = express()
const contenedor = new Contenedor(DBfile)


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/products', (req, res) => {
    const data = contenedor.getAll()

    res.json(data)
})

app.get('/api/products/random', async (req, res) => { {}
    try{
        const data = await contenedor.getAllPromise()

        const numero = Math.floor(Math.random() * data.length)
        const item = data[numero]

        res.json(item)
    } catch (e) {
        res.status(500)
        res.send(e)
    }
})

app.post('/api/products', (req, res) => {
    const newData = req.body
    console.log(newData)
    contenedor.save(newData)

    res.send("Se registro satisfactoriamente")
})

app.delete('/api/productos/:id', (req, res) => {
    const id = Number(req.params.id)
    contenedor.deleteById(id)

    res.send('Eliminado satisfactoriamente')
})

const server = app.listen(PORT, () => console.log(`Listening ${PORT} ...`))
server.on('error', e => {
    console.log('Server error: ', e)
})
