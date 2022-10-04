const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { name: 'r2' },
    headers: { key: 'asdasd'}
})
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => console.log('END'))

axios.post('https://jsonplaceholder.typicode.com/posts', {aaa: 'Buy Beers'}, {
    params: { name: 'r2' },
    headers: { key: 'asdasd'}
})
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => console.log('END'))

