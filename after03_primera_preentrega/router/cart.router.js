const express = require('express')
const Contenedor = require('../contenedores/contenedor')
const { Router } = express

const contenedorCart = new Contenedor('carts.json')
const cartRouter = Router()

cartRouter.get('/',  (req, res) => {
    res.json(contenedorCart.getAll())
})
cartRouter.post('/', (req, res) => {
    obj = {...req.body, ...{ products: []} }
    res.json(contenedorCart.save(obj))
})

cartRouter.post('/:id/products', (req, res) => {
    
    const product = req.body
    const cartID = req.params.id
    const cart =  contenedorCart.getByID(cartID)
    cart.products.push(product)

    const newObj = contenedorCart.editByBody(cart, cartID)

    res.json(newObj)
})


module.exports = cartRouter