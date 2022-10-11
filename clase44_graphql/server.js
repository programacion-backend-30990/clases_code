const express = require('express')
const { graphqlHTTP } = require("express-graphql")
const schemaStudent = require('./schema/student.schema')
const resolvers = require('./resolvers/student.resolvers')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schemaStudent,
    rootValue: resolvers,
    graphiql: true
}))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running ${PORT} ...`);
})