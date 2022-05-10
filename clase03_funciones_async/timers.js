

setTimeout(() => {
    const time = new Date().toLocaleTimeString()
    console.log(time, 'Saludos a Francisco Macedonio')
    throw 'Error'
}, 3000)


setInterval(() => {
    const time = new Date().toLocaleTimeString()
    console.log(time, 'Saludos a Vanessa Pe;a')
}, 2000)