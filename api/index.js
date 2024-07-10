const express = require('express');
const app = express();
const dotenv =require('dotenv');
const mongoose =require('mongoose')

dotenv.config()
 


app.get('/',(req,res)=>{
    res.send("hello developer akshai")
})


    mongoose.connect(process.env.MONGODB_KEY)
    .then(()=> console.log("DB connected successfully"))
    .catch((err) => console.log(err))

const port = process.env.PORT || 4001

app.listen(port,()=> console.log(`server is connected on port: ${port}`))
 



