const twilio = require('twilio')

const SID = 'AC2e2a8660adede115f63ddca901e5ade8'
const token = 'd147c94d8598053b4fd660b3404f00a7'

const client = twilio(SID, token)

client.messages.create({
    body: 'Saludos para Agustin !!',
    from: '+12676514549',
    to: '+573163386191'
})
    .then(r => console.log(r))
    .catch(e => console.log(e))