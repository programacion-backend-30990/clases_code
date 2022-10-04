const express = require('express')
const RouterUsers = require('./route')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/info', (req, res) => res.send('OK'))
app.use('/api', new RouterUsers())

app.listen(8080, () => {
    console.log('Listening...');
})