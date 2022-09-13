const { Router } = require('express')
const { default: mongoose } = require('mongoose')
const CartModel = require('./../models/cart.model')
const ProductModel = require('./../models/product.model')

const routerCart = Router()


routerCart.post('/', (req, res) => {
    const c = new CartModel()
    p.save()
        .then(() => res.json(c))
        .catch(e => res.json(e))
})
routerCart.get('/:productName', async (req, res) => {
    try{
        userID =  mongoose.Types.ObjectId(req.headers.userid)
        let cart = await CartModel.findOne({user: userID})
        if (!cart) {
            cart = new CartModel({user: userID, products: []})
            cart = await cart.save()
        }
        
        const product = await ProductModel.findOne({name: req.params.productName})
        if(!product) return res.send('product not found')

        console.log(product._id);
        const result = await CartModel.updateOne(
            { _id: cart._id }, 
            { $push: { products: product._id } }
        );
        console.log(result);

        return res.send(await CartModel.findOne({user: userID}))
    }catch(e) {
        console.log(e);
        res.send(e)
    }

})

module.exports = routerCart