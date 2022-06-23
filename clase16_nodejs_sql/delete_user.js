const options = require('./options/db')
const knex = require('knex')(options)

knex.from('users')
    .where('age', '>', 40)
    .del()

    .then(() => console.log("data deleted"))
    .catch(err => console.log(err))
    .finally(() => knex.destroy()) 