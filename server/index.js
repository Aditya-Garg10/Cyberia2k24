const  dotenv =  require('dotenv');
const express = require("express");
const { default: mongoose } = require("mongoose");
const eventRoute = require("./router/Event")
const cors = require("cors")

const app = express();
const port = 8000;

dotenv.config();


app.use(
    cors({
      origin: [
       
        "http://localhost:5173",
        
      ],
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
      credentials: true,
    })
  );
  
  
  
  
  
  const allowedOrigins = [  
    
    
    "http://localhost:5173",
   
    
  ];
  
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });


app.get("/",(req,res)=>{
    res.send("Helloi")
})



app.use("/api/events",eventRoute)



const database = process.env.DATABASE_URL
mongoose.connect(database).then(()=>console.log("MongoDB connected"))




const server = app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

