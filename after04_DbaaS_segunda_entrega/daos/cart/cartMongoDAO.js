const ContenedorMongo = require('../../contenedores/contenedorMongo')
const CartModel = require('../../model/cart.model')

class CartMongoDAO extends ContenedorMongo {
    
    constructor() {
        super(CartModel)
    }

}

module.exports = CartMongoDAO