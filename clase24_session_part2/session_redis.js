const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const redis = require('redis')
const connectRedis = require('connect-redis')

const clientRedis = redis.createClient({
    legacyMode: true,
    host: 'localhost',
    port: 6379
})
clientRedis.connect().catch(console.error)

const RedisStore = connectRedis(session)

const app = express()
app.use(cookieParser())
app.use(session({
    store: new RedisStore({client: clientRedis}),
    secret: 'dumbledure',
    resave: false,
    saveUninitialized: false
}))

app.get('/', async (req, res) => {

    if(req.session.views) {
        req.session.views++
        res.send(`<h2>Views: ${req.session.views}</h2>`)
    } else {
        req.session.views = 1
        res.send("Welcome !!")
    }
})

app.get('/info', (req, res) => {
    console.log(req.session)
    console.log(req.sessionID)
    console.log(req.cookies)
    console.log(req.sessionStore)
})

app.listen(8081)
