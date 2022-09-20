const { Router } = require('express')
const { getProductController, getAPIProductController } = require('../controllers/products.controller')

const productRouter = new Router()

productRouter.get('/', getProductController)
productRouter.get('/api', getAPIProductController)

module.exports = {productRouter}