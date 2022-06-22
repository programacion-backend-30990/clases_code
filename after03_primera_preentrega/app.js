const express = require('express')
const cartRouter = require('./router/cart.router')
const productRouter = require('./router/product.router')

const app = express()

app.use('/static', express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)

app.listen(8080)