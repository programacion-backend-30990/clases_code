const options = require('./options/db')
const knex = require('knex')(options)

knex.from('users')
    .select(['id', 'name', 'age'])
    .where('age', '>', '18')
    .orderBy('age', 'desc')

    .then( rows => {
        for (const row of rows) {
            console.log(`${row['id']}: ${row['name']}`);
        }
        console.log(rows);
    })
    .catch(err => console.log(err))
    .finally(() => knex.destroy()) 