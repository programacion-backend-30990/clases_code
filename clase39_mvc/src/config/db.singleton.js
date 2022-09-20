const mongoose = require('mongoose')


class SingletonClass {
    constructor() {
        const URL = "mongodb://127.0.0.1/coderhouse"
    }

    connect() {
        mongoose.connect(URL)
    }
}

const URL = "mongodb://127.0.0.1/coderhouse"
mongoose.connect(URL)
