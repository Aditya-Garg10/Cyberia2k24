const  dotenv =  require('dotenv');
const express = require("express");
const { default: mongoose } = require("mongoose");
const eventRoute = require("./router/Event")
const paymentRoute = require("./router/Payment")
const userRoute = require("./router/User")
const cors = require("cors")
const Razorpay = require("razorpay");


const app = express();
const port = 8000;

dotenv.config();


app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(
    cors({
      origin: [
       
        "https://www.msudcacyberia.in",
        "http://localhost:3000",
        "https://cyberia2k24.vercel.app",        
        "http://127.0.0.1:3000"
        
      ],
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
      credentials: true,
    })
  );
  
  
  
  
  
  const allowedOrigins = [  
    
    "https://cyberia2k24.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://www.msudcacyberia.in",
    
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

app.get("/api/getkey",(req,res)=>res.status(200).json({key : process.env.RAZORPAY_API_KEY}));
app.get("/",(req,res)=>{
    res.send("Helloi")
})



app.use("/api/events",eventRoute)
app.use("/api/payment",paymentRoute)
app.use("/api/user",userRoute)



const database = process.env.DATABASE_URL
mongoose.connect(database).then(()=>console.log("MongoDB connected"))




const server = app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})


