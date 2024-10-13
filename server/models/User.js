const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    },
    contactNo : {
        type: Number,
        required : true,
    },
    contactNo2 : {
        type: Number,        
    },
    institute : {
        type: String,        
    },
    level : {
        type: String,        
    },
    events : {
        type: Array,        
    }
},{timestamps: true});

const User = mongoose.model("User",userSchema);

module.exports = User;