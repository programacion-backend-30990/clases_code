const { Router } = require('express')
const ProductModel = require('./../models/product.model')

const routerProduct = Router()


routerProduct.post('/', (req, res) => {
    const p = new ProductModel(req.body)
    p.save()
        .then(() => res.json(p))
        .catch(e => res.json(e))
})
routerProduct.get('/:name?', (req, res) => {
    ProductModel.find(req.params.name ? { name: req.params.name } : {})
        .then(p => res.json(p))
        .catch(e => res.send(e))
})

module.exports = routerProduct