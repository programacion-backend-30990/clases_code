const { createTransport } = require('nodemailer')

const mail = 'devante.rosenbaum@ethereal.email'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: mail,
        pass: 'Y5wPEmWeufCD5h8zy1'
    }
})

const mailOptions = {
    from: 'Server Node JS',
    to: mail,
    subject: 'Masil de Prueba desde NODE',
    html: `
        <h1 style="color: blue;">Contenido de Sgustin. 
            Y saludos para <span style="color: blue;">Javier Perez</span>!!
        </h1>`
}

transporter.sendMail(mailOptions)
    .then(r => console.log(r))
    .catch(e => console.log(e))