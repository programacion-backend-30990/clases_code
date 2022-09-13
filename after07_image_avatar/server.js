const express = require('express')
const connectMongo = require('./config/db.mongo')
const fileUpload = require('express-fileupload');

const routerProduct = require('./router/products.router')
const routerUser = require('./router/user.router')
const routerCart = require('./router/cart.router')

const app = express()
app.use(fileUpload());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
connectMongo()

app.get('/', (r, x) => x.send('OK'))
app.use('/api/product', routerProduct)
app.use('/api/user', routerUser)
app.use('/api/cart', routerCart)


app.listen(8080)