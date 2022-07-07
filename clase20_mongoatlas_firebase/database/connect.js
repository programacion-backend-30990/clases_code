const mongoose = require('mongoose');
const connectDB = async () => {
    const pass = "74u7EMxTX5GzGWu"
    const URL = `mongodb+srv://r2d2:${pass}@cluster111.czvoz.mongodb.net/?retryWrites=true&w=majority`

    return mongoose.connect(URL)
}

module.exports = connectDB

// nos conectamos a las (21:40 arg)