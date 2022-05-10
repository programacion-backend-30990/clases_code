new Promise( function(resolve, reject) {
    setTimeout(() => resolve(1), 2000)
})
    .then(result => {
        console.log(result)
        return result * 2
    })
    .then(result => {
        console.log(result)
        return result * 3
    })
    .then(result => {
        console.log(result)
        return result + 60
    })