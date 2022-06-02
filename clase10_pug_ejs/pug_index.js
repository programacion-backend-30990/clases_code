const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (p, r) => r.send('OK'))
app.get('/template', (req, res) => {
    res.render('hello.pug', { msn: 'Saludos a Nico'})
})

app.get('/datos', (req, res) => {
    // get API
    res.render('datos.pug', req.query)
})

app.listen(8080)