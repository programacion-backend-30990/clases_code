const { fork } = require('child_process')
const forked = fork('child.js')

forked.on('message', msg => {
    console.log(`From child ${JSON.stringify(msg)}`);
})

console.log('Init process Dad');
setTimeout(() => {
    forked.send({mensaje: 'I am your Father!!'})
}, 5000)