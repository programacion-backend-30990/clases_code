let contador = 0

setInterval(() => {
    process.send({
        contador: ++contador
    })
}, 1000)

process.on('message', msg => {
    console.log(`Msg from dad: ${JSON.stringify(msg)}`);
})