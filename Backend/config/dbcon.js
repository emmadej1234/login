const mongoose = require("mongoose");

connectDB = async function(){
    const mongodb = await mongoose.connect(process.env.MONGO)
     console.log(`successfully connected to database`) 

}

module.exports= connectDB






