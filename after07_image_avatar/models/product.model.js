const mongoose = require('mongoose')

const ProductModel = mongoose.model('Product', mongoose.Schema({
    name: {type: String, max: 200},
    price: {type: Number},
}))

module.exports = ProductModel