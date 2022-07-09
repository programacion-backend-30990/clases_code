const ContenedorMongo = require('../../contenedores/contenedorMongo')
const ProductModel = require('../../model/product.model')

class ProductMongoDAO extends ContenedorMongo {
    
    constructor() {
        super('mongodb://localhost/productos', ProductModel)
    }

}

module.exports = ProductMongoDAO