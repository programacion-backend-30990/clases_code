const express = require('express')
const { bookRouter } = require('./routes/book.router')
const connectMongo = require('./config/db')

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('ok'))
app.use('/api/book', bookRouter)

const PORT = process.env.PORT || 8080
connectMongo(() => {
    const server = app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    })
    server.on('error', e => console.log(e))
})