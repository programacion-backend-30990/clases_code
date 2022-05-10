
function mostrar(params) {
    console.log(params)
}

// Funciones como objetos
const mostrar2 = function(params) {
    console.log(params)
}

// Arrow Functions
const mostrar3 = (params) => {
    console.log(params)
}

const mostrar4 = params => {
    console.log(params)
}

const mostrar5 = params => console.log(params)

// Return implicito

const media = (a, b) => (a + b) / 2 
// const media = (a, b) => {
//     return (a + b) / 2 
// }

const m = media(4, 8)

console.log(m)



mostrar('Nicolas Censabella')