const express = require('express')
// npm i multer --save
const multer = require('multer')
const { Router } = express

const app = express()
const DB = []
const DBPersons = []


app.use('/static', express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Middleware
app.use((req, res, next) => {
    console.log('Time:', req.method, new Date().toLocaleTimeString())
    next()
})

// Upload file
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = Router()
router.get('/', (req, res) => res.json(DB))
router.post('/', (req, res) => { DB.push(req.body); res.send('obj pushed') })
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if(!file) {
        const error = new Error('Please upload file')
        error.httpStatusCode = 400
        return next(error)
    }

    res.send(file)
})

const routerPersons = Router()
routerPersons.use(function (req, res, next) {
    console.log('Request persons', req.method)
    next()
})
routerPersons.get('/', (req, res) => res.json(DBPersons))
routerPersons.post('/', (req, res) => { DBPersons.push(req.body); res.send('obj pushed') })


app.use('/api/products', router)
app.use('/api/persons', routerPersons)

app.listen(8080)