const express = require("express");
const { checkout, paymentVerification } = require("../controller/PaymentController.js");

const router = express.Router();


router.post("/checkout",checkout)
router.post("/paymentVerification",paymentVerification)


module.exports = router;