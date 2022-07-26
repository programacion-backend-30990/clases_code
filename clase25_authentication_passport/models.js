const mongoose = require('mongoose')

module.exports = mongoose.model('Users', {
    username: String,
    password: String,
    name: String
})

/**
 * Volvemos a las 21:38 arg
 */