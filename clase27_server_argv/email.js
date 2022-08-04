const parseArgv = require('minimist')

const args = parseArgv(process.argv.slice(2))


const email = args.email

console.log('Enviando correo a ', email)
