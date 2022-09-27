const minimist = require('minimist')
const ProductAPI = require('./services/product.api')
const ProductDTO = require('./dto/product.dto')

const productAPI = new ProductAPI()

async function exec() {
    const argv = minimist(process.argv.slice(2))

    const {cmd, id, name, price} = argv

    try{
        switch(cmd.toLowerCase()) {
            case 'add':
                console.log('Add');
                const addResult = await productAPI.add({name, price})
                console.log(addResult);

                break
            case 'get':
                console.log('get');
                const products = await productAPI.get()
                const productDTP = products.map(p => new ProductDTO(p))
                console.log(productDTP);

                break
            default:
                console.log('cmd not valid');
                break
        }
    } catch (e) {
        console.log(e);
    } finally {
        console.log('finished');
        process.exit()
    }
}

exec()