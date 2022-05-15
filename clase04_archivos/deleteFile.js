const fs = require('fs')

fs.unlink('./salida.txt', error => {
    if(error) console.log('Hubo un error borrando') 
    else console.log('Deleted!')
})