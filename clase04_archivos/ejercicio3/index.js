const fs = require('fs')

const info = {
    name: 'Sebastian',
    age: 30,
    location: 'Buenos aires'
}

fs.writeFileSync('./data.json', JSON.stringify(info))