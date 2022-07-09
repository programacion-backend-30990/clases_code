const fs = require('fs');

class ContenedorFile {

    constructor(textJson) {
        this.textJson = textJson;
        this.data = []
        try {
            this.read()
        } catch (error) {
            this.write()
        }
    }

    read() {
        this.data = JSON.parse(fs.readFileSync(this.textJson));
    }

    write() {
        fs.writeFileSync(this.textJson, JSON.stringify(this.data));
    }
    
    async save(obj) {
        obj['id'] = this.data.length + 1;
        this.data.push(obj)
        this.write()

        return obj
    }

    async getByID(id) {
        const objID = this.data.find(obj => obj.id == id)
        return objID
    }

    async editById(obj , id) {
        obj['id'] = id
        const idx = this.getAll().findIndex(p => p.id === id)
        this.getAll().splice(idx , 1 , obj )
        this.write()
    }

    async getAll() {
        return this.data
    }

    async deleteByID(id) {
        const idx = this.data.findIndex(obj => obj.id == id)
        this.data.splice(idx, 1)
        this.write()
    }

    async deleteAll() {
        this.data = []
        this.write()
    }

}

module.exports = ContenedorFile;
