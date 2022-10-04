const request = require('supertest')('http://127.0.0.1:8080')
const expect = require('chai').expect

describe('test api rest full', () => {
    describe('GET', () => {
        it('Must return 200', async() => {
            const response = await request.get('/api/')
            expect(response.status).to.eql(200)
        })
    })
})