const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const personas = [
    {name: 'Arturo', lastname: 'Verbel', age: 10},
    {name: 'Javier', lastname: 'Perez', age: 31},
    {name: 'Vanessa', lastname: 'Soria', age: 21}
]

app.get('/', (req, res) => {
    res.render('desafio/index', { personas })
})

app.get('/delete/:name', (req, res) => {
    const name = req.params.name
    const idx = personas.findIndex(p => p.name == name)
    personas.splice(idx, 1)

    console.log(name, ' removed from personas')

    res.render('desafio/index', { personas, isDeleted: 'deleted' })
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    console.log(req.body, ' added to personas')

    res.render('desafio/index', { personas })
})

app.listen(8080)
console.log('Running...')