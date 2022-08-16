const express = require('express')

const app = express()
app.get('/', (x, r) => {
	console.log("GET process:", process.pid)
	
	r.send('OK ' + process.pid)
})

app.listen(process.env.port || 8080)
