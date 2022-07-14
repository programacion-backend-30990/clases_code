const {normalize, schema} = require('normalizr')
const util = require('util')
const fs = require('fs')
const holding = require('./holding')

function print(obj) {
    console.log(util.inspect(obj, false, 12, true));
}

const persona = new schema.Entity('persona')
const empresa = new schema.Entity('empresa', {
    encargado: persona,
    gerente: persona,
    empleados: [persona]
})
const holdingSchema = new schema.Entity('holding', {
    empresas: [empresa]
})

const dataNormalized = normalize(holding, holdingSchema)
print(dataNormalized)
fs.promises.writeFile('dataNormalized.json', JSON.stringify(dataNormalized))
    .then(() => 'Data exported')
    .catch(e => console.log(e))