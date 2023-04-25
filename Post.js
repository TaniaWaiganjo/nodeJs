const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    fname:{
    type: String,
    required: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  paymentAmount: {
    type: Number,
    required: true
  },
   
});

module.exports = mongoose.model("Posts", PostSchema)
