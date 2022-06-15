const express = require('express')
const http = require('http');
const { DateTime } = require('luxon');
const { Server } = require("socket.io");
const Contenedor = require('./contenedor')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const server = http.createServer(app);
const io = new Server(server);

app.use('/public', express.static(__dirname + '/public'))

const products = []

const contenedorProducts = new Contenedor('producs.json')
const contenedorMessages = new Contenedor('messages.json')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.body)
    products.push(req.body)
    res.json(req.body)
})


app.get('/products', (req, res) => {
    res.render('products', { products })
})

app.get('/messages', (req, res) => {

    res.render('messages', { 
        messages: contenedorMessages.getAll()
    })
})

io.on('connection', socket => {
    socket.on('add', data => {
        console.log(data)
        products.push(data)
        io.sockets.emit('show', products)
    })

    socket.on('chat-in', data => {
        const dateString = new Date().toLocaleString()
        const dataOut = {
            msn: data.msn,
            username: data.username,
            date: dateString
        }
        console.log(dataOut)
        contenedorMessages.save(dataOut)

        io.sockets.emit('chat-out', 'ok')
    })
})


server.listen(8080, () => {
    console.log('Running...')
})