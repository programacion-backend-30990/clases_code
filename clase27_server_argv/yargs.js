const yargs = require('yargs')(process.argv.slice(2))

const argv = yargs
    .default({
        nombre: 'Daniel',
        apellido: 'Conrad'
    })
    .alias({
        n: 'nombre',
        a: 'apellido'
    })
    .boolean('admin')
    .argv

console.log(argv);

// Volvemos a las 21:35 =D