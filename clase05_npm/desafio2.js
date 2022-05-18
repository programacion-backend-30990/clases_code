const moment = require('moment')

const now = moment()
const birthday = moment("1988-06-23")

console.log('Hoy es', now.format('DD/MM/YYYY'))
console.log('Claudio nacio el', birthday.format('DD/MM/YYYY'))

const diffDays = now.diff(birthday, 'days')
console.log(`Desde el día de mi nacimiento pasaron ${diffDays} dias`)

const diffYears = now.diff(birthday, 'years')
console.log(`Desde el día de mi nacimiento pasaron ${diffYears} years`)