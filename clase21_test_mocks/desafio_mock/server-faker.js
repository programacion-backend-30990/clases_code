const express = require('express')
const { faker } = require('@faker-js/faker')

const app = express()

function createObject() {
    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.color.human()
    }
}

app.get('/test', (req, res) => {
    const cant = Number(req.query.cant) || 10

    const objs = []
    for (let i = 0; i < cant; i++) {
        objs.push(createObject())
    }

    res.json(objs)
})


app.listen(8080)