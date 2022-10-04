const https = require('https')

const opt = {
    hostname: 'pokeapi.co',
    port: 443,
    path: '/api/v2/pokemon/pikachu',
    method: 'GET'
}

const req = https.request(opt, res => {
    console.log(res.statusCode);
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', e => {
    console.error('Hubo un error');
    console.error(e);
})

req.end()