const express = require('express')
const session = require('express-session')
// npm i connect-mongo
const MongoStore = require('connect-mongo')

const app = express()
app.use(session({
    store: new MongoStore({
        mongoUrl: 'mongodb://localhost/sessions'
    }),
    secret: "turing",
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if(req.session.views) {
        req.session.views++
        res.send(`<h2>Views: ${req.session.views}</h2>`)
    } else {
        req.session.views = 1
        res.send("Welcome !!")
    }
})


app.listen(8080)