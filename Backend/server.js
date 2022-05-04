const express = require("express")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const path = require('path'); 
const connectDB = require("./config/dbcon.js")
const dotenv = require("dotenv").config();
const app = express()

const apps = require('./scoresroute/route')
connectDB()

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
 

app.set('view engine', 'hbs');


app.use('/register', apps)
app.use('/allUsers', apps)
app.use('/login',apps)
app.use('/', apps)

 server = function(port){
    app.listen(port,()=> console.log(`server started on port ${port}`))
}
server(5000 || process.env.PORT);


exports.module=app


