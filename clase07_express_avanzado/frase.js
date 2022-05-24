const express = require('express')
const app = express()

const frase = 'Coderhouse clase javascript con R2' // 'ard'

app.get('/api/frase', (req, res) => res.json({ frase }))

app.get('/api/letras/:num', (req, res) => {
    const num = Number(req.params.num) - 1

    if (isNaN(num)) {
        res.status(400)
        res.json({error: 'El params no es un numero'})

        return
    }

    if( num > frase.length) {
        res.status(400)
        res.json({error: 'Numero fuera de rango'})

        return
    }

    res.json({ letra: frase[num] })
})



app.listen(8080)