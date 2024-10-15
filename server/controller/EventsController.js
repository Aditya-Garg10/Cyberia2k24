const Event = require("../models/Events");


const getAllEvents = async (req, res, next) => {
    try {
     const response = await Event.find({})     
     res.send(response).status(200)
    } catch (error) {
      console.log(error);
      return res.status(500).send("User Already Exists");
    }
  };
  
module.exports = {getAllEvents}