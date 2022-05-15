const fs = require('fs')

const info = fs.readFileSync('./fyh.txt', 'utf-8')


const datetime = new Date().toLocaleTimeString()
console.log('Hora actual:', datetime)
console.log('Hora en el archivo:', info)