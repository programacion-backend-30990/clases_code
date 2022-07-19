const express = require('express')
const session = require('express-session')

const app = express()

const DBusers = [
    {username: 'joaquin', password: '12345'},
    {username: 'emanuel', password: 'secret'}
]

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))

function auth(req, res, next) {
    if(req.session.admin) {
        return next()
    }

    return res.status(401).send('error auth')
}

app.get('/login', (req, res) => {
    let {username, password} = req.query

    if(!username || !password) return res.send('Login failed')

    username = username.toLowerCase()

    const data = DBusers.find(d => d.username == username && d.password == password)
    if(!data) return res.send('Login failed')

    req.session.username = username
    req.session.admin = true

    res.send('Login sucess!!')
})

app.get('/private', auth, (req, res) => {
    res.send('Welcome to the Matrix 🕶')
})


app.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(!err) res.send('Logout ok')
        else res.send({status: 'Logout ERROR ', body: err})
    })
})

app.listen(8080)