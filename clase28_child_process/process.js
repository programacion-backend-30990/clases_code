
process.on('beforeExit', code => {
    console.log('Bye bye, with code ', code);
})

process.on('exit', code => {
    console.log('EXIT !!');
})

process.on('uncaughtException', err => {
    console.log("El process caugh the error:", err);
})

console.log(process.argv)
console.log( process.cwd() )

console.log( process.pid )
console.log( process.version )
console.log( process.title )
console.log( process.platform )

console.log( process.memoryUsage() )

console.log( process.execPath )
process.stdout.write('asdasdasd')
// Volvemos a las 21:15 pm =D Node Rules!!
