const cluster = require('cluster')
const express = require('express')

const PORT = process.argv[2] || 8080
const modoCluster = process.argv[3] || 'cluster'

function isPrime(num) {
    if([2, 3].includes(num)) return true
    else if([2, 3].some(n => num % n == 0)) return false
    else {
        let i = 5, w = 2;
        while((i ** 2 <= num)) {
            if(num % i == 0) return false
            i += w
            w =  6 - w
        }
    }
    
    return true;
}

if(modoCluster == 'cluster' && cluster.isMaster ) {
    const numCPUs = require('os').cpus().length
    
    console.log('numCPUsn ', numCPUs);
    console.log('PID MAster', process.pid);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Died!');
    })

} else {
    const app = express() 
    app.get('/', (req, res) => {
        const primes = []
        const max = Number(req.query.max) || 1000

        for (let i = 1; i <= max; i++) {
            if(isPrime(i)) primes.push(i)
        }
        res.json(primes)
    })
    app.listen(PORT, () => {
        console.log('Server listen ', PORT);
        console.log('PID WORKER', process.pid);
    })
}