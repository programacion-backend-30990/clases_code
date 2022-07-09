const mongoose = require('mongoose');

const ProductModel = mongoose.model(
    'Products', 
    new mongoose.Schema({
        name: String,
        img: String,
        price: Number
    })
);
 
module.exports = ProductModel;