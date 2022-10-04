const https = require('https')
const data = JSON.stringify({
    aaaa: 'Buy beers'
})
const opt = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(opt, res => {
    console.log(res.statusCode);
    res.on('data', d => process.stdout.write(d))
})

req.on('error', e => {
    console.error(e);
})

req.write(data)
req.end()