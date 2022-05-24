const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let frase = "Tutora Paola es la mejor xD"

app.get('/api/frase', (req, res) => res.json({ frase }) )

app.get('/api/palabras/:pos', (req, res) => {
    const palabras = frase.split(' ')
    const pos = Number(req.params.pos) - 1

    if (pos < 1 || pos > palabras.length) {
        res.status(400)
        res.json({error: 'Numero fuera de rango'})
        return
    }

    res.json({buscada: palabras[pos]})
})

app.put('/api/palabras', (req, res) => {
    const palabra = req.body.palabra
    const pos = req.body.pos - 1

    const palabras = frase.split(' ')

    palabras.splice(pos, 0, palabra)
    frase = palabras.join(" ")

    res.json('Palabra agregada')
})


app.listen(8080)