const options = require('./options/db')
const knex = require('knex')(options)


knex.from('users')
    .where('name', '=', 'R2')
    .update({age: 15})

    .then(() => console.log("data updated"))
    .catch(err => console.log(err))
    .finally(() => knex.destroy()) 