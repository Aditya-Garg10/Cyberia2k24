
const express = require("express");
const { getAllEvents,createEvent } = require("../controller/EventsController.js");



const router = express.Router();

router.get("/getAllEvents", getAllEvents)
router.post("/createEvent", createEvent)


module.exports = router;