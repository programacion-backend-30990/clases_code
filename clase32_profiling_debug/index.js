const express = require('express')
const crypto = require('crypto')

const PORT = process.argv[2] || 8080

const app = express()
const users = {}

app.get('/users', (req, res) => {
    res.json({users})
})

app.get('/new', (req, res) => {
    let username = req.query.username || ''
    let password = req.query.password || ''

    if(!username || !password || users[username]) {
        return res.sendStatus(400)
    }

    const salt = crypto.randomBytes(128).toString('base64')
    const hash = crypto.pbkdf2Sync(password, salt, 100, 512, 'sha512')

    users[username] = { salt, hash }

    return res.sendStatus(200)
})

app.get('/auth-bloq', (req, res) => {
    let username = req.query.username || ''
    let password = req.query.password || ''

    if(!username || !password || !users[username]) {
        process.exit(1)
    }

    const { salt, hash } = users[username]
    const encryptHash = crypto.pbkdf2Sync(password, salt, 100, 512, 'sha512')

    if(crypto.timingSafeEqual(hash, encryptHash)) {
        return res.sendStatus(200)
    } else {
        process.exit(1)
    }
})


app.get('/auth-nobloq', (req, res) => {
    let username = req.query.username || ''
    let password = req.query.password || ''

    if(!username || !password || !users[username]) {
        process.exit(1)
    }

    const { salt, hash } = users[username]
    crypto.pbkdf2(password, salt, 100, 512, 'sha512', (err, encryptHash) => {
        if(crypto.timingSafeEqual(hash, encryptHash)) {
            return res.sendStatus(200)
        } else {
            process.exit(1)
        }
    })
})

app.listen(PORT, () => {
    console.log('Server listen', PORT);
})