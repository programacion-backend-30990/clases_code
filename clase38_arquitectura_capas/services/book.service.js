const BookModel = require('../models/book.model')
var mongoose = require('mongoose');

const getBooksService = id => {
    query = {}
    if (id) query = {_id: mongoose.Types.ObjectId(id)}

    return BookModel.find(query)
        .then(result => {
            return (result.length == 1) ? result[0] : result
        })
}

const saveBookService = data => {
    data.name = data.name.toLowerCase()
    return BookModel.create(data)
}

module.exports = { getBooksService, saveBookService }