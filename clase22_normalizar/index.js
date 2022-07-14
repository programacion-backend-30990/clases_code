const { normalize, denormalize, schema } = require('normalizr')
const util = require('util')

const blogposts = [
    {
        id: 1,
        title: "El sol está muy caliente",
        description: "Hablamos de las temperaturas",
        content: "Bla bal balasdnasdn abdjasd",
        author: {
            id: 1,
            name: "Facundo Scienza",
            city: "Buenos Aires"
        },
        comments: [
            {
                id: 1,
                author: "Ezequiel",
                content: "Guaauu"
            },
            {
                id: 2,
                author: "Rolando",
                content: "jajajaja"
            }
        ]
    },
    {
        id: 2,
        title: "La luna",
        description: "LUNA",
        content: "UuuuuuuuuuUUUUU",
        author: {
            id: 1,
            name: "Facundo Scienza",
            city: "Buenos Aires"
        },
        comments: []
    }
]

const authorSchema = new schema.Entity('authors')
const commentSchema = new schema.Entity('comments')
const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
})

const normalizedData = normalize(blogposts, [postSchema])

console.log(JSON.stringify(normalizedData));
print(normalizedData)

function print(obj) {
    console.log(util.inspect(obj, false, 12, true));
}

const dataDevuelta = denormalize(
    normalizedData.result,
    [postSchema],
    normalizedData.entities
)
print(dataDevuelta)