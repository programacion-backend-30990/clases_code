const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))


app.get('/with-session', (req, res) => {
    if(req.session.contador) {
        req.session.contador++
        res.send(`Has visitado el sitio ${req.session.contador} veces`)
    } else {
        req.session.contador = 1
        res.send(`Welcome!!`)
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(!err) res.send('Logout ok')
        else res.send({status: 'Logout ERROR ', body: err})
    })
})

app.listen(8080)