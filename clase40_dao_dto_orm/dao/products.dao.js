const MongoClient = require('../db/mongoClient')

class ProductDAO {

    constructor() {
        this.client = new MongoClient()
        this.client.connect()
    }

    async getAll() {
        return await this.client.get()
    }

    async add(product) {
        return await this.client.add(product)
    }

    async exit() {
        return await this.client.disconnect()
    }

}

module.exports = ProductDAO