import NewBaseDAO from './base.js'
import createNewDTO from '../DTO/news.js'

class NewMemoryDAO extends NewBaseDAO {

    constructor(filename) {
        super()
        this.news = []
    }

    getNews = async _id => {
        try {
            if(!_id) return this.news
            
            let index = this.news.findIndex(n => n._id == _id)

            return index >= 0 ? [news[index]] : []
        } catch(e) {
            console.log('Error to get News', e);
            return []
        }
    }

    insertNew = async newToInsert => {
        try{
            const _id = this.getNextID(this.news)
            const datetime = new Date().toLocaleString()
            const newDTO = createNewDTO(newToInsert, _id, datetime)

            this.news.push(newDTO)

            return newDTO
        } catch(e) {
            console.log('Error to insert News', e);
            return {}
        }
    }

}

export default NewMemoryDAO