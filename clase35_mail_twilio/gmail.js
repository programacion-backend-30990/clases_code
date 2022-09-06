const { createTransport } = require('nodemailer')
const ejs = require('ejs')

const mail = 'arturo.verbel@gmail.com'
const mail_to = process.argv[2] || 'arturo.verbel@gmail.com'

const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: mail,
        pass: 'ivipxcflszyocksi'  // Volvemos a las 21:20 =D
    }
})

const data = 'My data from Vanessa Paola Soria!! '

ejs.renderFile('index.html.ejs', { data })
    .then(body => {
        transporter.sendMail({
            from: mail,
            to: [mail_to],
            subject: 'Coreo de Vanesa xD',
            html: body,
            attachments: [ {path: 'r2d2.jpg' } ]
        })
            .then(r => console.log(r))
            .catch(e => console.log('error:', e))
    })