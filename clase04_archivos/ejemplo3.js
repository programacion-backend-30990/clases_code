function hacerTarea(num, cb) {
    console.log('haciendo tarea', num)
    return new Promise((resolve, reject) => {
        setTimeout(resolve(), 100)
    })
}

console.log('inicio tarea');

(async function() {
    await hacerTarea(1)
    await hacerTarea(2)
    await hacerTarea(3)
    await hacerTarea(4)

    console.log('fin de tarea')
})()


