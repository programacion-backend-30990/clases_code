const parseArgv = require('minimist')

const args = parseArgv(process.argv.slice(2))
console.log(args)
