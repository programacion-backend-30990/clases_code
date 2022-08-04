const parseArgv = require('minimist')

const args = parseArgv(process.argv.slice(2))


const operacion = args.operacion
const num1 = args._[0]
const num2 = args._[1]

result = 0
switch (operacion) {
    case 'multiplicar':
        result = parseInt(num1) * parseInt(num2)
        break;
    case 'sumar':
    case 'suma':
        result = parseInt(num1) + parseInt(num2)
        break;
    default:
        break;
}



console.log('El resultado es', result)
