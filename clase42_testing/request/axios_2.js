const axios = require('axios')

function getDataProducts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

function getDataPrices() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

Promise.all([getDataPrices(), getDataProducts()])
    .then(function(results) {
        console.log(results);
    })