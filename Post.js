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
  roomNumber:{
    type: Number,
    required: false
  },
  bookingDate:{
    type:Date,
    default:Date.now
  },
  currency:{
    type:String,
    default:"USD"
  },
   
});

//const roomSchema

module.exports = mongoose.model("Posts", PostSchema)
