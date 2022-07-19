const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/set', (req, res) => {
    res.cookie('server', 'conrad').send('Se establecio una cookie')
})

app.get('/set-with-timeout', (req, res) => {
    res.cookie('server2', 'Valor de la cookie with time', {maxAge: 10000}).send('Se establecio una cookie que expira en 10 segundos')
})

app.get('/get', (req, res) => {
    res.send(req.cookies)
})

app.get('/set-color/:color', (req, res) => {
    const color = req.params.color || 'white'
    res.cookie('color', color).send(`Se estable el color ${color}`)
})

app.get('/webpage', (req, res) => {
    const color = req.cookies.color || 'white'
    res.send(`<div style="background-color: ${color};">Saludos a Javier Perez</div>`)
})

const server = app.listen(8080, () => console.log('Server running'))
server.on('error', e => console.log(e))