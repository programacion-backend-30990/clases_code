const fs = require('fs')

try {
    //Leer archivo
    const data = fs.readFileSync('./output.txt', 'utf-8')
    console.log(data)
} catch (err) {
    console.log('Hubo un error, creando archivo')
    fs.writeFileSync('./output.txt', 'Nuevo')
}

// Agregar texto al archivo
fs.appendFileSync('./output.txt', '\nSaludos a Francisco')

//borrar archivo
fs.unlinkSync('./output.txt')
