const mongoose = require('mongoose')

const connectMongo = (cb) => {
    mongoose.connect('mongodb://localhost:27017/coderhouse')
        .then(() => {
            console.log('DB connected');
            cb()
        })
}

module.exports = connectMongo