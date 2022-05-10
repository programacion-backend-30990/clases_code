function dividir(dividendo, divisor) {
    return new Promise( (resolve, reject) => {
        if(divisor == 0) {
            reject('No se puede dividir por cero')
        } else {
            resolve( dividendo / divisor)
        }
    } )
}

dividir(10, 0)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`error: ${error}`);
    })