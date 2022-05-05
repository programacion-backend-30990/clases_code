class Persona {

    constructor(obj = {}) {
        this.nombre = obj?.nombre || ''
        this.apellido = obj?.apellido || ''
        this.edad = obj?.edad || 20
        this.city = obj?.city || 'Buenos aires'

        this.productos = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addProduct(obj) {
        this.productos.push(obj)
    }
}

const persona1 = new Persona({
    nombre: 'Junior',
    apellido: 'Sanchez',
    edad: 23,
    city: 'Cartagena'
})

const persona2 = new Persona({nombre: 'Joaquin', apellido: 'Boto'})
const persona3 = new Persona({})
const persona4 = new Persona()

console.log(persona1)
console.log(persona2)
console.log(persona3)
console.log(persona4)