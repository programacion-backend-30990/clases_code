const config = require('./config')
const express = require('express')
console.log(config);

const app = express()

console.log(`NDOE_ENV=${config.NODE_ENV}`);

app.get('/', (rq, rs) => rs.send('OK'))

app.listen(config.PORT, config.HOST, () => {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
})