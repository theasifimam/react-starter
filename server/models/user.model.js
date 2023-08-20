const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mnumber: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "user-data" }
);

const model = mongoose.model("user-data", User);
module.exports = model;
