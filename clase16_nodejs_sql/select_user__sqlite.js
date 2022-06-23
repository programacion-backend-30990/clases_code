const options = require('./options/db_sqlite')
const knex = require('knex')(options)

knex.from('users').select('*')
    .then( rows => {
        for (const row of rows) {
            console.log(`${row['id']}: ${row['name']} (${row['age']})`);
        }
        console.log(rows);
    })
    .catch(err => console.log(err))
    .finally(() => knex.destroy()) 