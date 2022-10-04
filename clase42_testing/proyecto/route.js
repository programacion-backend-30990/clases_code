const { Router } = require('express')
const mongodb = require('mongodb')
const { MongoClient, ObjectId } = mongodb

const router = new Router()
const database = 'coderhouse'
const collectionName = 'users'
const url = 'mongodb://127.0.0.1'

router.post('/', async (req, res) => {
    const user = req.body

    try {
        const connection = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = connection.db(database)
        const collection = db.collection(collectionName)

        await collection.insertOne(user)

        res.json(user)
    } catch (error) {
        console.error(error);
        res.json(user)
    }
})

router.get('/', async (req, res) => {
    const user = req.body

    try {
        const connection = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = connection.db(database)
        const collection = db.collection(collectionName)

        const id = req.params.id
        if(id) return res.json([await collection.findOne({_id: ObjectId(id)})])
        else return res.json(await collection.find({}).toArray())

    } catch (error) {
        console.error(error);
        res.json([])
    }
})

class RouterUsers {
    constructor()  {
        return router
    }
}

module.exports = RouterUsers