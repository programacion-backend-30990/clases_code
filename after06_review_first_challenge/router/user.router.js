const { Router } = require('express')
const UserModel = require('./../models/user.model')

const routerUser = Router()


routerUser.post('/', (req, res) => {
    const user = new UserModel(req.body)
    user.save()
        .then(() => res.json(user))
        .catch(e => res.json(e))
})
routerUser.get('/:email?', (req, res) => {
    UserModel.find(req.params.email ? { email: req.params.email } : {})
        .then(user => res.json(user))
        .catch(e => res.send(e))
})

module.exports = routerUser