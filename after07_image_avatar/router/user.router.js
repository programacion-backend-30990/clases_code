const { Router } = require('express')

const UserModel = require('./../models/user.model')
const fileUpload = require('express-fileupload');
const routerUser = Router()



routerUser.post('/', (req, res) => {
    data = req.body
    data['avatar'] = ''
    const user = new UserModel(req.body)
    user.save()
        .then(() => res.json(user))
        .catch(e => res.json(e))
})

routerUser.post('/upload', fileUpload(), (req, res) => {
    
    console.log(req.files);
    console.log(req.file);
    UserModel.find(req.params.email ? { email: req.params.email } : {})
        .then(user => {
            
            if (!req.files) return res.statusCode(400).send({ message: 'No file uploaded' });

            let avatar = req.files.avatar;
            const filenameFinal = './public/' + avatar.name
            avatar.mv(filenameFinal);

            user.avatar = filenameFinal
            user.save()
                .then(() => res.json(user))
                .catch(e => res.json(e))
        })
        .catch(e => res.send(e))

});

routerUser.get('/:email?', (req, res) => {
    UserModel.find(req.params.email ? { email: req.params.email } : {})
        .then(user => res.json(user))
        .catch(e => res.send(e))
})

module.exports = routerUser