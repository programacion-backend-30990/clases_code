const { spawn } = require('child_process')

const child = spawn('find', ['.'])

child.stdout.on('data', data => {
    console.log(` . ${data}`);
})

child.stderr.on('data', data => {
    console.log(` - ${stderr}`);
})

child.on('error', error => {
    console.log(` kk ${error}`);
})

child.on('close', code => {
    console.log(`Child exited with code ${code}`);
})