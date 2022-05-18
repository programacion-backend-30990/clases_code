const Contenedor = require('./contenedor_promesas')

const container = new Contenedor('file2.json')

container.save({
    author: 'Cixin Lu',
    name: 'Thre body problem',
    price: 100
})

console.log('Usar getByID')
console.log(container.getByID(3))

console.log('Delete')
//container.deleteAll()
