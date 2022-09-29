
class NewBaseDAO {

    constructor() { }

    getNews = async (_id) => { throw new Error('Method not implemented') }
    insertNews = async (newToInsert) => { throw new Error('Method not implemented') }
    updateNews = async (_id, newToUpdate) => { throw new Error('Method not implemented') }
    deleteNew =  async (_id) => { throw new Error('Method not implemented') }

    getNextID(news = []) {
        const total = news.length

        return total ? parseInt(news[total-1]._id) + 1 : 1
    }

    getIndex(_id, news) {
        return news.findIndex(n => n._id == _id)
    }
}

export default NewBaseDAO