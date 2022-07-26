const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const routes = require('./routes')
const Users = require('./models')

const app = express()
app.use(express.urlencoded({extended: true}))


passport.use('login', new LocalStrategy(
    (username, password, done) => {
        Users.findOne({username}, (err, user) => {
            if(err) return done(err)
            if (!user) console.log('User not found ')
           
            return done(null, user)
        })
    }
))

passport.use('signup', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
        console.log('signup...')

        Users.findOne({username}, (err, user) => {
            if(err) return done(err)
            if (user) {
                console.log('User already exists')
                return done(null, false)
            }

            const newUser = { username, password, name: req.body.name }
            Users.create(newUser, (err, userWithID) => {
                if(err) return done(err)

                console.log(userWithID)
                return done(null, userWithID)
            })

        })

    }
))


passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    Users.findById(id, done)
})


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 30000,
        secure: false,
        httpOnly: true
    }
}))
app.use(passport.initialize())
app.use(passport.session())

// Define routes
app.get('/', routes.getRoot)

app.get('/login', routes.getLogin)
app.post(
    '/login',
    passport.authenticate('login'),
    routes.postLogin
)

app.get('/signup', routes.getSignup)
app.post(
    '/signup',
    passport.authenticate('signup', {failureRedirect: '/failsignup'}),
    routes.postSignup
)
app.get('/failsignup', routes.getFailsignup)


function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) next()
    else res.redirect('/login')
}
app.get('/private', checkAuthentication, (req, res) => {
    const { user } = req
    res.send('<h1>Solo pudiste entrar porque estas logueado 🚀 </h1>')
})


function connectDB(url, cb) {
    mongoose.connect(
        url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        err => {
            if(!err) console.log('Connected DB!')
            if(cb != null) cb(err)
        }
    )
}

connectDB('mongodb://localhost:27017/appappapp', err => {
    if(err) return console.log('Error connecting DB', err)

    app.listen(8080, () => {
        console.log('Listening...');
    })
})