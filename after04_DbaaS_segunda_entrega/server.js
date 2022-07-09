const express = require('express')

const FactoryDAO = require('./daos/index')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const DAO = FactoryDAO()

app.get('/products', async (req, res) => res.send(await DAO.product.getAll()))
app.post('/products', async (req, res) => res.send(await DAO.product.save(req.body)))

app.get('/cart', async (req, res) => res.send(await DAO.cart.getAll()))
app.post('/cart', async (req, res) => res.send(await DAO.cart.save(req.body)))

app.listen(8080)