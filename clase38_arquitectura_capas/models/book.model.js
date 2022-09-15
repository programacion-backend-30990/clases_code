const mongoose = require('mongoose')

const BookModel = mongoose.model('Book', mongoose.Schema({
    name: String,
    author: String,
    price: Number
}))

module.exports = BookModel