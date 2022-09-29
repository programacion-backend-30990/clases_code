import mongodb from 'mongodb'
import NewBaseDAO from './base.js'

const { MongoClient, ObjectId } = mongodb

class NewMongoDAO extends NewBaseDAO {

    constructor(database, collection) {
        super();
        (async () => {
            console.log('Connecting mongo DB ...');

            const connection = await MongoClient.connect(`mongodb://127.0.0.1`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            const db = connection.db(database)
            this._collection = db.collection(collection)
            console.log('DB connected');
        })()
    }

    getNews = async _id => {
        try {
            if(!_id) {
                const news =  await this._collection.find({}).toArray();
                return news
            }

            console.log('Search ', _id);
            const newOne = await this._collection.findOne({
                _id: ObjectId(_id)
            })
            
            return [newOne]
        } catch(e) {
            console.log('Error to get News', e);
            return []
        }
    }

    insertNew = async newToInsert => {
        try{
            await this._collection.insertOne(newToInsert)

            return newToInsert
        } catch(e) {
            console.log('Error to insert News', e);
            return newToInsert
        }
    }

}

export default NewMongoDAO