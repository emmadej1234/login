const Registration = require("../model/register")
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");
const { db } = require("../model/register");
const bcrypt = require("bcryptjs/dist/bcrypt");

                
             const register = async(req,res,next)=>{
             const  { username, firstname,lastname, email, password}=req.body
            if(!username||!firstname||!lastname||!email||!password){
                res.status(400).json ({
                    message:"fill all the fields"
                });
            }else{

             const userExists = await Registration.findOne({email})
            if(userExists){
                 res.status(400).json ({
                message:"user already exist"
                    
                        });
                        
                    
                   }else{
                const salt = await bcrypt.genSalt(10)
                bcrypt.hash(req.body.password,salt,function(err,hash){
                    if (err){
                          return res.status(500).json({
                           error:err
                           });
                }else{       
       
        
                  const registration = new Registration({
                     _id: new mongoose.Types.ObjectId(),
                    username:req.body.username,
                     firstname:req.body.firstname,
                     lastname:req.body.lastname,
                     email:req.body.email,
                     password:hash,
                     token:generateToken(Registration._id)
                    });
    
                 registration.save().then(result =>{
                    res.status(200).json(result);
          })
                 .catch(err => console.log(err));
                  res.status(201).json ({
                   message:"user succesfully registerd",
                      createRegistration:registration
                      
    });
}
})
}
 }
}
//generate JWT

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn : '30d',
    })
}
//login 
const login = async(req,res,next)=>{
    Registration.find({email:req.body.email}).exec().then(user =>{
        if (user.length < 1){
            return res.status(404).json({
                message:'Auth failed'
        });
        }
        bcrypt.compare(req.body.password, user[0].password,(err,result))
            if (err){
            return res.status(404).json({
                  message:'Auth failed'
                
        });
    
 }
 if (result){
        return res.status(404).json({
            message:'Auth sucessful'

    });
    }
    res.status(401).json({
        message :'auth failed'
    });
});
    }

             
const allUsers = async(req,res,next)=>{
 //pagination
    const page=req.query.p || 0
    const bookPerPage = 3


    let registers = []

    db.collection('registrations').find().sort({username:1}).skip(page*bookPerPage).limit(bookPerPage).forEach(registration=>registers.push(registration)).then(()=>{
        res.status(200).json(registers)
        })
    .catch(()=>{
            res.status(500).json({error:'could not fetch document'})
        })
}


 const deletes = async(req,res,next)=>{

     const id = req.params.deleteUserid;
     Registration.deleteOne({_id:id}).exec().then(result =>{
         res.status(200).json(result);
     }) .catch(err=>{
        res.status(500).json({
             error:err
         })
     })
 }



    
        
module.exports={
    register,
   allUsers,
   deletes,
    login, 

}

        


