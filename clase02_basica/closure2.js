
const multiplicar = numero => n => n * numero

function multiplicarX(numero) {
    return function(n) {
        return n * numero
    }
}


const times2 = multiplicar(2)
const times3 = multiplicar(3)
const times17 = multiplicar(17)


console.log( times2(2) )
console.log( times2(3) )
console.log( times2(4) )
console.log( times2(5) )
console.log('------------------------')
console.log( times3(2) )
console.log( times3(3) )
console.log( times3(4) )
console.log( times3(5) )
console.log('------------------------')
console.log( times17(2) )
console.log( times17(3) )
console.log( times17(4) )
console.log( times17(5) )