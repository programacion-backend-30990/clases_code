const mongoose = require('mongoose')

const URL = "mongodb://127.0.0.1/coderhouse"
mongoose.connect(URL)

const ProductModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
})

module.exports = mongoose.model('Product', ProductModel)