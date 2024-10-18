const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    image: {
        type: String,
        required : true,
    },
    modalDescription : {
        type: String,
        required : true,
    },
    title : {
        type: String,
        required : true,
    },
    description : {
        type: String,        
    },
    RuleBook : {
        type: String,        
    },
    tag : {
        type: String,        
    },   
    category : {
        type: String,    
        required : true,    
    },   
    price : {
        type : Number,        
    },
    field : {
        type: String,
        require : true,
    }
},{timestamps: true});

const Event = mongoose.model("Event",userSchema);

module.exports = Event;