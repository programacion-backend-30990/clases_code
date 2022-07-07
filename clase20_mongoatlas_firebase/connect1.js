const mongoose = require('mongoose');
const connectDB = require('./database/connect')

const UserModel = mongoose.model('User', {name: String});

(async function() {
    await connectDB()

    await new UserModel({name: 'Joaquin'}).save()

    console.log('Usuario creado');
})()