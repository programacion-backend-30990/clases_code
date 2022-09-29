import fs from 'fs'
import NewBaseDAO from './base.js'
import createNewDTO from '../DTO/news.js'

class NewFileDAO extends NewBaseDAO {

    constructor(filename) {
        super()
        this.filename = filename
    }

    async read() {
        return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'))
    }

    async save(news) {
        await fs.promises.writeFile(this.filename, JSON.stringify(news))
    }

    getNews = async _id => {
        try {
            const news = await this.read()
            if(!_id) return news
            
            let index = news.findIndex(n => n._id == _id)

            return index >= 0 ? [news[index]] : []
        } catch(e) {
            console.log('Error to get News', e);
            return []
        }
    }

    insertNew = async newToInsert => {
        try{
            const news = await this.read()
            
            const _id = this.getNextID(news)
            const datetime = new Date().toLocaleString()
            const newDTO = createNewDTO(newToInsert, _id, datetime)

            news.push(newDTO)

            await this.save(news)
            return newDTO
        } catch(e) {
            console.log('Error to insert News', e);
            return {}
        }
    }

}

export default NewFileDAO