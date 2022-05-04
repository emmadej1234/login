const express = require('express');
const Registration = require("./model/register")
const router = express.Router();
const {register,allUsers,deletes,login}= require('./controller/scoresControler');


    router.post('/', register)
    router.get('/' ,allUsers)
    router.post('/', login)
    router.delete('/:deleteUserid', deletes)
 
  
  
    


       
module.exports=router