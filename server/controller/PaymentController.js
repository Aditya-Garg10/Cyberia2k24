const dotenv = require("dotenv");
const Razorpay = require("razorpay");
dotenv.config();
const crypto = require("crypto")

const instance = new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret : process.env.RAZORPAY_API_SECRET
})
  

const checkout = async(req,res) =>{
 try {
     
const options = {
  amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};

const order = await instance.orders.create(options);
console.log(order)
res.status(200).json({sucess:true,order})
 } catch (error) {
    console.log(error)
 }
}



const paymentVerification = async(req,res) =>{
  console.log(req.body)
  try {
    const { razorpay_order_id,razorpay_payment_id,razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto.createHmac('sha256',process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');
    console.log("sig recieved" , razorpay_signature)
    console.log("sig generated" , expectedSignature);

        const isAuthentic = expectedSignature === razorpay_signature;

        if(isAuthentic){
          res.status(204).json({success: true})
        }
        else{
          res.status(400).json({
            success : false
          })
        }
  
  } catch (error) {
    res.status(400).json({
      success : false,
      message : error.description
    })
    console.log(error)
  }
}



module.exports = {checkout,paymentVerification}