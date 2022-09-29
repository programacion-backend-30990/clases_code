import config from '../config/config.js'
import NewsFactgoryDAO from "../model/DAO/newFactory.js"

class NewApi {
    constructor() {
        this.newDAO = NewsFactgoryDAO.get(config.TYPE_DB)
    }

    async getNew(id) {
        return await this.newDAO.getNews(id)
    }

    async insertNew(newToInsert) {
        return await this.newDAO.insertNew(newToInsert)
    }


}

export default NewApi