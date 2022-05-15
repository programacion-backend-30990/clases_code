const fs = require('fs')

const data = fs.readFileSync('./data.json', 'utf-8')
const json = JSON.parse(data)

console.log(json)
json.age += 3

fs.writeFileSync('./data.json', JSON.stringify(json))