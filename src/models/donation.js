const mongoose = require("mongoose");


const donationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required:true
    },
    phoneNumber:{
      type:String,
      required:true
    },
    amount: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model("Donation", donationSchema);