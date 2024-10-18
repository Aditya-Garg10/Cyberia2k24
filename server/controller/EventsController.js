const Event = require("../models/Events");


const getAllEvents = async (req, res, next) => {
    try {
     const response = await Event.find()     
     res.send(response).status(200)
    } catch (error) {
      console.log(error);
      return res.status(500).send("User Already Exists");
    }
  };
  

const createEvent = async (req, res, next) => {
    try {
      const {modalDescription,title,description,RuleBook,tag,price,image,category,field} = req.body;
     const response = await Event.create({image,modalDescription,title,description,field,RuleBook,tag,category,price});     
     const success = true
     res.json({success,response}).status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).send("User Already Exists");
    }
  };
  
module.exports = {getAllEvents,createEvent}