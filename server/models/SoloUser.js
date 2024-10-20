const mongoose = require("mongoose");

const SoloUserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    ug_pg: {
      type: String,
    },
    stream: {
      type: String,
    },
    email: {
      type: String,
      required: true,
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
    age: {
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

const SoloUsers = mongoose.model("SoloUserData", SoloUserSchema);

module.exports = SoloUsers;
