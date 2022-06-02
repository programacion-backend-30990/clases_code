const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (p, r) => r.send('OK'))
app.get('/pets', (req, res) => {
    const pets = [
        {name: 'Dorado', animal: 'pex', months: 12},
        {name: 'Brownie', animal: 'pug', months: 50},
        {name: 'Cleopatra', animal: 'cat', months: 60},
        {name: 'Arroba', animal: 'dog', months: 70},
        {name: 'Polo', animal: 'dog', months: 70}
    ]

    const mensaje = 'Mascotas de la clase'

    res.render('pets.ejs', {pets, mensaje})
})

app.listen(8080)