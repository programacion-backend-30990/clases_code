
const express = require('express')
const { productRouter } = require('./routes/products.router')

const app = express()
app.use(express.json())

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('OK'))
app.use('/products', productRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log('Running server ');
})
server.on('error', e => console.log('SERVER ERROR', e))