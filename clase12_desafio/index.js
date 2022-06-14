const express = require('express')
const http = require('http');
const { Server } = require("socket.io");

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const server = http.createServer(app);
const io = new Server(server);

app.use('/public', express.static(__dirname + '/public'))

const products = [
    {name: 'Beers', price: 120}, 
    {name: 'Ron', price: 100}
]

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

io.on('connection', socket => {
    socket.on('add', data => {
        console.log(data)
        products.push(data)
        io.sockets.emit('show', `new data`)
    })
})


server.listen(8080, () => {
    console.log('Running...')
})