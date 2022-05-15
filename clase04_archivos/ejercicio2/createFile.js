const fs = require('fs')

const datetime = new Date().toLocaleTimeString()
fs.writeFileSync('fyh.txt', datetime)