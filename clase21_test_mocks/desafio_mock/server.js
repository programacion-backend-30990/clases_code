const express = require('express')

const app = express()

const nombres = ['Javier', 'Ignacio', 'Joaquin', 'Diego', 'Francisco']
const apellidos = ['Vallejos', 'Perez', 'Conrad', 'Casco', 'Mogollon']
const colores = ['rojo', 'blue', 'yellow', 'pink', 'green']


app.get('/test', (req, res) => {
    
    const idx = Math.floor(Math.random() * 5)

    res.json({
        nombre: nombres[idx],
        apellido: apellidos[idx],
        color: colores[idx]
    })
})


app.listen(8080)