import express from 'express'
import NewsController from '../controller/news.controller.js'

const router = express.Router()

class NewsRouter {
    constructor() {
        this.newsController = new NewsController()
    }

    start() {
        router.get('/:id?', this.newsController.getNews)
        router.post('/', this.newsController.insertNews)

        return router
    }
}

export default NewsRouter