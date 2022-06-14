import * as operaciones from './lib/operaciones'

const mensaje:string = 'Hola Francisco !! Saludos ..'
console.log(mensaje)

let num1:number = 10
let num2:number = 4

console.log(`La suma de ${num1} y ${num2} es ${operaciones.sumar(num1, num2)}`)
console.log(`La resta de ${num1} y ${num2} es ${operaciones.restar(num1, num2)}`)
console.log(`El producto de ${num1} y ${num2} es ${operaciones.mult(num1, num2)}`)
console.log(`La division de ${num1} y ${num2} es ${operaciones.div(num1, num2)}`)