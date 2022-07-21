const express = require('express')
const session = require('express-session')
const sessionFile = require('session-file-store')

// Con esta variable persistimos la info de session
const FileStore = sessionFile(session)

const app = express()
app.use(session({
    store: new FileStore({
        path: './mySessions',
        ttl: 300,
        retries: 0
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