const  dotenv =  require('dotenv');
const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 8000;

dotenv.config();

app.get("/",(req,res)=>{
    res.send("Helloi")
})




const database = process.env.DATABASE_URL
mongoose.connect(database).then(()=>console.log("MongoDB connected"))




const server = app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

