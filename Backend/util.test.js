
const request = require("supertest")
const app = require( './server.js')

describe ("POST /register",()=>{
    describe ("given a username and firstname and lastname and email and password",()=>  {
    test('should respond with a status code 200', async ()=>{
        const response = await request (app).post("/register").send({
            username:"username",
            firstname:"firstname",
            lastname:"lastname",
            email:"email",
            password:"hash"
           
        })
        expect(response.statusCode).toBe(200)
    })

    })



})


