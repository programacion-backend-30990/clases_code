const options = require('./options/db')
const knex = require('knex')(options)

const users = [
    {name: 'R2', age: 12},
    {name: 'Javier Perez', age: 20},
    {name: 'Joaquin Boto', age: 30},
    {name: '[tutor] Diego', age: 52}
]

knex('users').insert(users)
    .then(() => console.log("data inserted"))
    .catch(err => console.log(err))
    .finally(() => knex.destroy()) 