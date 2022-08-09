const { execFile } = require('child_process')

execFile(__dirname + '/bash.sh', (err, out, stderr) => {
    if(err) {console.log(err); return}
    if(stderr) {console.log(stderr); return}

    console.log(out);
})