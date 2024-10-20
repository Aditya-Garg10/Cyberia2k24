const mongoose = require("mongoose")

const SoloUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required : true,
    },
    teamName: {
        type: String,
        required : true,
    },
    teamLeader: {
        type: String,
        required : true,
    },
    members: {
        type: Number,
        required : true,
    },
    member: {
        type: Array,
        required : true,
    },
    ug_pg: {
        type: String,
        required : true,
    },
    stream: {
        type: String,
        required : true,
    },
    domain: {
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
    year : {
        type: String,        
    },
    level : {
        type: String,        
    },
    events : {
        type: Array,        
    }
},{timestamps: true});

const SoloUsers = mongoose.model("SoloUserData",SoloUserSchema);

module.exports = SoloUsers;

        