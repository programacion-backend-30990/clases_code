const options = require('./options/db')
const knex = require('knex')(options)

const users = [
    {name: 'Emanuel', age: 30},
    {name: '[tutora] Paola', age: 21},
    {name: 'Esteban Moreno', age: 17},
    {name: 'Javier Perez', age: 25}
];

(async () => {
    try {
        console.log('Clean data');
        await knex('users').del()

        console.log('Insert users');
        await knex('users').insert(users)

        console.log('Read all users...');
        const rows = await knex.from('users').select('*')
        for(r of rows) {
            console.log(`${r['id']}: ${r['name']} (${r['age']})`);
        }

        console.log('Insert one user');
        await knex('users').insert({name: 'New User', age: 28})

        console.log('Read again all users...');
        const rows2 = await knex.from('users').select('*')
        for(r of rows2) {
            console.log(`${r['id']}: ${r['name']} (${r['age']})`);
        }
        // 21:40 retomamos ...

    } catch(e) {
        console.log(e)
    } finally {
        knex.destroy()
    }
})()