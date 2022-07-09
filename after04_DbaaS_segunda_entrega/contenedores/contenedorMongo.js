const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId; 

class ContenedorMongo {

    constructor(uri, model) {
        this.model = model
        this.mongo = mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
            .then(db => console.log(`DB is connected`))
            .catch(err => console.log(err));
    }

    async save(obj) {
        const newProduct = new this.model(obj);
        await newProduct.save()

        return newProduct
    }

    async getByID(id) {
        return this.model.find({_id: new ObjectId(id)})
    }

    async getAll(id) {
        return this.model.find({})
    }

    async editById(obj, id) {
        console.log('UPDATE');
        const objUpdated = await this.model.updateOne(
            { _id: new ObjectId(id)},
            { $set: obj }
        )
        
        return objUpdated
    }

    async deleteByID(id) {
        const userDelete = await this.model.deleteOne({_id: new ObjectId(id)})
        return true
    }


}

module.exports = ContenedorMongo;
