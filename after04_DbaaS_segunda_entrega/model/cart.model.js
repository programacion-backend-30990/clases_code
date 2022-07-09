const mongoose = require('mongoose');

const CartModel = mongoose.model(
    'Cart', 
    new mongoose.Schema({
        products: [{ type: String }],
        createdAt: Date
    })
);
 
module.exports = CartModel;