const Router = require('koa-router')

const router = new Router({
    prefix: '/books'
})

const books = [
    {id: 1, name: '1984', author: 'George Orwell'},
    {id: 2, name: 'HP camara secertos', author: 'JK Rownloiung'},
    {id: 3, name: 'eloquebt js', author: 'NI'},
    {id: 4, name: 'Revoluciones', author: 'Diana Uribe'},
]

router.get('/', ctx => {
    ctx.body = {
        status: 'success',
        message: books
    }
})

router.get('/:id', ctx => {

    const booksFiltered = books.filter(b => b.id == ctx.params.id)
    
    if(booksFiltered.length) {
        ctx.body = booksFiltered[0]
    } else {
        ctx.response.status = 404
        ctx.body = {
            status: 'error',
            message: 'Bookm not found'
        }
    }
})

router.post('/', ctx => {

    const newBook = books.push({
        id: ctx.request.body.id,
        name: ctx.request.body.name,
        author: ctx.request.body.author
    })

    ctx.response.status = 201
    ctx.body = {
        status: 'success',
        message: newBook
    }
})

module.exports = router

