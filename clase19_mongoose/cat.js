const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')

const Cat = mongoose.model('Cat', {name: String})

const miGato = new Cat({name: 'Shazam'})
miGato.save()
    .then(() => console.log('Se guardo el gato'))
    .catch((e) => console.log('ERROR ', e))