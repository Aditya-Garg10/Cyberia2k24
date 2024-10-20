const mongoose = require("mongoose");

const teamUserSchema = new mongoose.Schema(
  {    
    teamName: {
      type: String,
      
    },
    teamLeader: {
      type: String,
      
    },
    members: {
      type: Number,
      
    },
    member: {
      type: Array,
      
    },
    ug_pg: {
      type: String,
      
    },
    stream: {
      type: String,
      
    },
    domain: {
      type: String,
      
    },
    email: {
      type: String,
      
    },
    contactNo: {
      type: Number,
      
    },
    contactNo2: {
      type: Number,
    },
    institute: {
      type: String,
    },
    year: {
      type: String,
    },
    level: {
      type: String,
    },
    events: {
      type: String,
    },
    qrString: {
      type: String,
      required: true,
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const teamUsers = mongoose.model("teamUsersData", teamUserSchema);

module.exports = teamUsers;
