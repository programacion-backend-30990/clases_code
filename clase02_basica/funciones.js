
// funciones comunes y corrientes :(
function saludar(name) {
    console.log('Saludos a', name)
}

// Funciones anonimas
const saludar2 = function(name) {
    console.log('Saludos a', name)
}

// Funciones Flecha
const saludarArrow = name => {
    console.log('Saludos a', name)
}

const arrow1 = name => 'Saludos a ' + name;

// IIFE
(function() {
    console.log('IIFE executed')
})()

saludar('Vanesa Paola')
console.log( arrow1('Claudio') )