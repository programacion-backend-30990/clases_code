const express = require('express')
const ApiUserMock = require('../api/users')

class UserRouter extends express.Router {
    constructor() {
        super()
        const apiUsers = new ApiUserMock()

        this.post('/populate', (req, res) => {
            const cant = Number(req.query.cant) || 5
            const users = apiUsers.populate(cant)
            res.json(users)
        })

        this.get('/', (req, res) => res.json(apiUsers.getAll()) )

        this.get('/:id', (req, res) => {
            const id = req.params.id
            return res.json(apiUsers.get(id))
        })

    }
}

module.exports = UserRouter