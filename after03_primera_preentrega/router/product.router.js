const express = require('express')
const Contenedor = require('../contenedores/contenedor')
const { Router } = express

const contenedorProducts = new Contenedor('products.json')
const productRouter = Router()

function auth(req, res, next) {
    if('admin' in req.headers) next()
    else {
        res.status(400)
        res.send('No admin')
    }
}

productRouter.get('/', (req, res) => {
    res.json(contenedorProducts.getAll())
})
productRouter.post('/', auth, (req, res) => {
    res.json(contenedorProducts.save(req.body))
})

module.exports = productRouter