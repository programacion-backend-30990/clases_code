class Client {

    constructor(name, age, city) {
        this.name = name
        this.age = age
        this.city = city

        this.call = 0
    }

    static saludoCorto = 'Hola'

    saludoCompleto() {
        console.log(`Buenasas, mi nombre es ${this.name}`)
    }

    saludoStatic() {
        console.log(Client.saludoCorto)
    }
}

const cliente1 = new Client('Francisco', 23, 'Buenos aires')
const cliente2 = new Client('Joaquin', 30, 'Cordoba')

cliente1.saludoCompleto()
cliente2.saludoCompleto()

Client.saludoCorto = 'ssjsjs'

cliente1.saludoStatic()
cliente2.saludoStatic()