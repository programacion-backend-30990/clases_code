const mongoose = require('mongoose')

const Cart = mongoose.model('Cart', mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
}))

module.exports = Cart