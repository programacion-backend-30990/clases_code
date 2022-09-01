const express = require('express')
const AWS =  require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })

const sns = new AWS.SNS()
const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:757598741948:mensajes-coderhouse'

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'table-coderhouse'

const app = express()
app.use(express.json())


async function scanDynamoRecords(scanParams) {
    try {
        let dynamoData = await dynamodb.scan(scanParams).promise()
        const items = dynamoData.Items

        while(dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey
            dynamoData = await dynamodb.scan(scanParams).promise()
            items.push(...dynamoData.Items)
        }
        
        return items
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

app.get('/', (req, res) => {res.send('APP de la clase coderhouse')})
app.get('/api/products', async (req, res) => {
    try {
        const products = await scanDynamoRecords({ TableName: TABLE_NAME })
        res.json(products)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }

})
app.post('/api/products', (req, res) => {
    
    dynamodb.put({ TableName: TABLE_NAME, Item: req.body }).promise()
        .then(() => {
            console.log('Saved OK');
            const product = JSON.stringify(req.body)

            sns.publish({
                Message: `New product ${product}`,
                Subject: 'Se agrego un nuevo producto',
                TopicArn: SNS_TOPIC_ARN
            }).promise()
        })
        .then(data => {
            const body = { operation: 'save', item: req.body }
            res.json(req.body)
        })
        .catch(e => {
            res.sendStatus(500).send(e)
        })
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Listening ${PORT}...`);
})

server.on('error', error => console.log(error))