const random = () => {

}

process.on('message', msg => {
    let cant = parseInt(msg.cant)

    const result = {}
    for (let i = 0; i < cant; i++) {
        const num = Math.ceil(Math.random()*1000)
        if (num in result) result[num]++
        else result[num] = 1
    }

    process.send(result)
})