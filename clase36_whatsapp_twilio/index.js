const accountSID = 'AC2e2a8660adede115f63ddca901e5ade8'
const authToken = 'fa868afc9bb9263a7883f450f524484d'
const client = require('twilio')(accountSID, authToken)

client.messages.create({
	from: 'whatsapp:+14155238886',
	to: 'whatsapp:+573163386191',
	body: 'Hola R2, soy un bot'
})
	.then(message => console.log(message))
	.catch(e => console.log(e))

