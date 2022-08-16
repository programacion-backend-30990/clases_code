const express = require('express')
const generate = require('./random')
const { fork } = require('child_process')

const app = express()
app.get('/', (req, res) => res.send('OK'))
app.get('/api/randoms', (req, res) => {
	
    const cant = req.query.cant || 500000000
    
    const computo = fork('./random.js')
    computo.send({cant})
    computo.on('message', result => {
        return res.json(result)
    })

	
})

app.listen(process.env.port || 8080)
