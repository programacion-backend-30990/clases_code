const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const fakeApi = () => [
    {name: 'Beers', price: 120},
    {name: 'Wine', price: 80},
    {name: 'Ron', price: 150},
    {name: 'Fernet', price: 75},
    {name: 'Whisky', price: 100}
]


app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './views')


app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/template', (req, res) => {
    res.render('main', {
        products: fakeApi(),
        listExists: true
    })
})

app.listen(8080)
