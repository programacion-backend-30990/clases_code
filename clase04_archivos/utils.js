const fs = require('fs')


fs.mkdir('./newFolder', err => {
    console.log('Carpeta creada')
})

fs.readdir('./', (error, nombres) => {
    if(error) console.log('Hubo un error')
    else{
        console.log(nombres)
    }
})