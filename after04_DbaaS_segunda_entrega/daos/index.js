const CartMemoryDAO = require('./cart/cartMemoryDAO')
const ProductMemoryDAO = require('./products/productMemoryDAO')
const CartFileDAO = require('./cart/cartFileDAO')
const ProductFileDAO = require('./products/productFileDAO')
const CartMongoDAO = require('./cart/cartMongoDAO')
const ProductMongoDAO = require('./products/productMongoDAO')

const FactoryDAO = () => {

    const typeDB = process.env.typeDB

    if(typeDB == 'memory') {
        console.log('Generate DAO with memory');
        return {
            cart: new CartMemoryDAO(),
            product: new ProductMemoryDAO()
        }
    } else if(typeDB == 'file') {
        console.log('Generate DAO with file');
        return {
            cart: new CartFileDAO(),
            product: new ProductFileDAO()
        }
    } else if(typeDB == 'mongo') {
        console.log('Generate DAO with mongo');
        return {
            cart: new CartMongoDAO(),
            product: new ProductMongoDAO()
        }
    }

    throw new Error('typeDB is not found')
}

module.exports = FactoryDAO