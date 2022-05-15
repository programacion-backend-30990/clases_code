const fs = require('fs')

fs.readFile('./output.txt', 'utf-8', (error, contenido) => {
    if(error) {
        console.log('Hubo un error')
    } else {
        console.log(contenido)
    }
})
console.log('asdasd')

fs.readFile('./output.txt', 'utf-8', (e, c) => {})
console.log(t)