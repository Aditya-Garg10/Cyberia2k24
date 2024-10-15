
const express = require("express");
const { getAllEvents } = require("../controller/EventsController.js");



const router = express.Router();

router.get("/getAllEvents", getAllEvents)


module.exports = router;