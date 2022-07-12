const express = require('express')
const UserRouter = require('./router/user.route')

const app = express()
app.use('/api/user', new UserRouter())


app.listen(8080)