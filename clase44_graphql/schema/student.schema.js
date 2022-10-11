const graphql = require('graphql')
const { buildSchema } = graphql

const schemaStudent = buildSchema(`
    type Student {
        id: ID!
        name: String,
        age: Int
    }

    input StudentInput {
        name: String,
        age: Int
    }

    type Query {
        getStudent(id: ID!): Student,
        getStudents(field: String, value: String): [Student],
    }

    type Mutation {
        createStudent(data: StudentInput): Student,
        updateStudent(id: ID!, data: StudentInput): Student,
        deleteStudent(id: ID!): Student,
    }
`)

// Volvemos a las 21:50 arg

module.exports = schemaStudent