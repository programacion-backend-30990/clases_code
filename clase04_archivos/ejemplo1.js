const delay = ret => {
    for(let i=0; i<ret*20e6;i++);
}


function hacerTarea(num) {
    console.log('Haciendo tarea ' + num)
    delay(100)
}

console.log('inicio de tareas')

hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)

console.log('fin de tarea')