const Calculadora = require('./calculadora')

test('Should add 4 and 5', () => {
    expect(Calculadora.sumar(4, 5)).toBe(9)
})

test('Should add -3 and -7', () => {
    expect(Calculadora.sumar(-3, -7)).toBe(-10)
})
