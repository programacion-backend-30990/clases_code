const ProductDAO = require('../dao/products.dao')

class ProductAPI {

    constructor() {
        this.productDAO = new ProductDAO()
    }

    async add(product) {
        return await this.productDAO.add(product)
    }

    async get() {
        return await this.productDAO.getAll()
    }

    async exit() {
        return await this.productDAO.exit()
    }

}

module.exports = ProductAPI