const fs = require('fs')

function readFile() {
    fs.promises.readFile('./output.txt', 'utf-8')
        .then( contenido => {
            console.log(contenido)
        })
        .catch(err => {
            console.log('Error al leer')
        })
}
readFile()