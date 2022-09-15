const { getBooksService, saveBookService } = require('../services/book.service')

const getBooksController = (req, res) => {
    const id = req.query.id || null
    getBooksService(id).then(datos => res.json(datos))
}

const saveBooksController = (req, res) => {
    const data = req.body
    console.log(data)

    saveBookService(data).then( result => res.status(201).json(result))
}

module.exports = { getBooksController, saveBooksController }