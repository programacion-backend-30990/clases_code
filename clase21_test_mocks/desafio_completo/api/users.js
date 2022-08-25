const ContenedorMemoria = require('../contenedor/contenedor')
const { faker } = require('@faker-js/faker')

class ApiUserMock extends ContenedorMemoria {
    constructor() {
        super()
    }
    
    populate(cant = 5) { 
        const news = []
        for (let i = 0; i < cant; i++) {
            const newUser = this.generateUser()
            const saved = this.save(newUser)
            news.push(saved)
        }

        return news
    }

    generateUser() {
        return {
            name: faker.name.firstName(),
            lastname: faker.name.lastName(),
            website: faker.internet.url(),
            image: faker.image.avatar()
        }
    }

}

module.exports = ApiUserMock