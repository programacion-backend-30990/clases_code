const express = require('express')
const fs = require('fs')

const app = express()

app.engine('vanessa', function(filePath, data, callback) {
    fs.readFile(filePath, function(err, content) {
        if(err) {
            return callback(new Error(err))
        }

        const rendered = content.toString()
            .replace('#title#', '<h1>' + data.title + '</h1>')
            .replace('#message#', '<p>' + data.message + '</p>')

        return callback(null, rendered)
    })
})
app.set('views', './views') // La carpeta de templates HTML
app.set('view engine', 'vanessa') // Registrar la plantilla


app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/template', (req, res) => {

    data = {
        title: 'Holaa Agustin!!',
        message: 'Informacion de plantilla'
    }

    res.render('index', data)
})





app.listen(8080)