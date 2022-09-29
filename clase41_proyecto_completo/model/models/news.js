
class News {
    constructor(title, body, author, imagen, email, view) {
        this.title = title
        this.body = body
        this.author = author
        this.imagen = imagen
        this.email = email
        this.view = view
    }

    static validate(newValidate, req) {
        return true
    }
}

export default News