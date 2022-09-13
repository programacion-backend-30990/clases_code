const mongoose = require('mongoose')

const UserModel = mongoose.model('User', mongoose.Schema({
    name: {type: String, max: 200},
    email: {type: String, max: 200},
    avatar: {type: String, max: 200},
    age: {type: Number},
    rol: {type: String, max: 10},
}))

module.exports = UserModel