const Contador = require('./contador')

test('Deberia sumar 2 a los numeros', () => {
    expect(Contador.contar2(5)).toBe(7)
    expect(Contador.contar2(-13)).toBe(-11)
    expect(Contador.contar2(0)).toBe(2)
    expect(Contador.contar2(1000)).toBe(1002)
})

test('Deberia sumar 3 a los numeros', () => {
    expect(Contador.contar3(5)).toBe(8)
    expect(Contador.contar3(-13)).toBe(-10)
    expect(Contador.contar3(0)).toBe(3)
    expect(Contador.contar3(1000)).toBe(1003)
})