const fs = require('fs')

fs.writeFile('./salida.txt', 'Saludos a Agustin dell', error => {
    if(error) {
        console.log('hubo un error')
    } else {
        console.log('File generated!')
        append()
    }
})

function append() {

    fs.appendFile('./salida.txt', '\nSaludos a Vallejos', error => {
        if(error) {
            console.log('hubo un error')
        } else {
            console.log('Texto agregado')
        }
    })

}