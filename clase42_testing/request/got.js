import got from 'got'

//IIFE
(async() => {
    try {
        const response = await got("https://jsonplaceholder.typicode.com/posts")
        console.log(response);
    } catch(e) {
        console.error(e);
    }
})();
 
(async() => {
    try {
        const { body } = await got.post("https://jsonplaceholder.typicode.com/posts", {
            json: {hii: 'hii'},
            responseType: 'json'
        })
        console.log(body);
    } catch(e) {
        console.error(e);
    }
})()

// Volvemos a las 21:~~  areg
// a las 21:29 xD