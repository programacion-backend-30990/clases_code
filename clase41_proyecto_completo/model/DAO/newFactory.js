import NewMemoryDAO from './newMemory.js'
import NewFileDAO from './newFile.js'
import NewMongoDAO from './newMongo.js'

class NewsFactgoryDAO {
    static get(type) {
        switch(type.toLowerCase()) {
            case 'memory': return new NewMemoryDAO()
            case 'file': return new NewFileDAO(process.cwd() + '/news.json')
            case 'mongo': return new NewMongoDAO('coderhouse', 'news')

            default: return new NewMemoryDAO()
        }
    }
}

export default NewsFactgoryDAO