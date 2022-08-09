
const { exec } = require('child_process')

exec('ls -lh', (error, stdout, stderror) => {
    if(error) {
        console.error(`error ${error}`)
    }

    if(stderror) {
        console.error(`stderr ${stderror}`)
    }

    console.log(stdout);
})